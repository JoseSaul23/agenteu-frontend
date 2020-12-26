import React, {Component} from 'react'
import RightPanel from '../common/RightPanel'
import {AiOutlineLike, AiFillLike, AiFillTwitterCircle} from 'react-icons/ai'
import {BsBookmark, BsBookmarkFill, BsFlagFill} from 'react-icons/bs'
import {RiShareForwardFill} from 'react-icons/ri'
import {FaTrashAlt, FaEdit, FaFacebook} from 'react-icons/fa'
import {ImEmbed} from 'react-icons/im'
import {_myColor} from '../common/util'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
    getReview,
    clearReview,
    deleteReview,
    recommendReview,
    saveReview,
    reportReview
} from '../actions/reviewActions'
import {clearErrors} from '../actions/errorActions'
import PropTypes from 'prop-types'
import {RedirectAs404} from '../common/RedirectAs404'


export class ReviewDetail extends Component {

    state = {
        showDeleteMessage: false,
        showLoginMessage: false,
        showLoginMessageForSave: false,
        showLoginMessageForReport: false,
        showReportConfirmation: false,
        showModal: false
    }

    static propTypes = {
        getReview: PropTypes.func.isRequired,
        review: PropTypes.object.isRequired,
        isLoading: PropTypes.bool,
        clearReview: PropTypes.func.isRequired,
        error: PropTypes.object.isRequired,
    }

    componentDidMount() {
        const {id} = this.props.match.params
        this.props.getReview(id)
    }

    componentDidUpdate() {
        if(this.props.wasDeleted){
            this.props.history.goBack(-1)
        }        
    }

    componentWillUnmount() {
        this.props.clearReview()
        this.props.clearErrors()
    }

    _showDeleteConfirmation = () => {
        if (this.state.showReportConfirmation === true) {
            this.setState({ showReportConfirmation: false })
        }
        this.setState({showDeleteMessage: !this.state.showDeleteMessage})
    }

    _handleDelete = () => {
        this.props.deleteReview(this.props.review.id)
    }

    _receiveRecommendation = () => {
        if(this.props.auth.isAuthenticated) {
            this.props.recommendReview(this.props.review.id)
        }
        else {
            if (this.state.showLoginMessageForSave === true) {
                this.setState({ showLoginMessageForSave: false })
            }
            if (this.state.showLoginMessageForReport === true) {
                this.setState({ showLoginMessageForReport: false })
            }
            this.setState({ showLoginMessage: !this.state.showLoginMessage })
        }
    }

    _saveReview = () => {
        if(this.props.auth.isAuthenticated) {
            this.props.saveReview(this.props.review.id)
        }
        else {
            if (this.state.showLoginMessage === true) {
                this.setState({ showLoginMessage: false })
            }
            if (this.state.showLoginMessageForReport === true) {
                this.setState({ showLoginMessageForReport: false })
            }
            this.setState({ showLoginMessageForSave: !this.state.showLoginMessageForSave })
        }
    }

    _handleReport = () => {
        if(this.props.auth.isAuthenticated) {
            if (this.state.showDeleteMessage === true) {
                this.setState({ showDeleteMessage: false })
            }
            this.setState({showReportConfirmation: !this.state.showReportConfirmation})
        }
        else{
            if (this.state.showLoginMessage === true) {
                this.setState({ showLoginMessage: false })
            }
            if (this.state.showLoginMessageForSave === true) {
                this.setState({ showLoginMessageForSave: false })
            }
            this.setState({showLoginMessageForReport: !this.state.showLoginMessageForReport})
        }
    }

    _reportReview = () => {
        this.props.reportReview(this.props.review.id)
        this._handleReport()
    }

    _toggleModal = () => {
        this.setState({ showModal: !this.state.showModal })
    }

    render() {

        if (this.props.error.status === 404) {
            return <RedirectAs404 location={this.props.location}/>
        }

        const {review} = this.props
        const {auth} = this.props

        return(
        <div className="columns">
            <div className="column is-two-thirds">
                {
                this.props.isLoading ? 
                
                <div className="columns mt-6">
                    <div className="column has-text-centered">
                        <button className="button is-link is-loading">Loading</button>
                    </div>
                </div> :

                <div className="column is-10 is-offset-1 columns is-multiline mt-2">
                    <div className="column is-full has-text-weight-medium small-label p-0 pl-1 closer-letters">
                        <p>
                            <span className="black-title">{review.user_name}</span> • {review.date}
                        </p>
                        <Link to={
                                review.entity_type === "Professor"
                                ? "/profesores/" + review.entity
                                : review.entity_type === "School"
                                ? "/escuelas/" + review.entity
                                : "/universidades/" + review.entity
                            }>
                            <p>sobre {review.entity_name}</p>
                        </Link>
                    </div>
                    <div className="column">
                        <div className="columns is-mobile">
                            <div className="column is-four-fifths review-main-box pt-2 pr-2 pl-2 pb-0"> 
                                <div className="review-text"> 
                                    <p className="text-overflow">{review.text}</p>
                                </div>
                                <div className="columns is-mobile pt-2"> 
                                    <div className="column is-6-desktop is-half-mobile icon">
                                    {
                                        auth.isAuthenticated && 
                                        review.recomendations && 
                                        review.recomendations.includes(auth.user.id) ?
                                        <div className="has-text-link centered-label">                                        
                                            <AiFillLike
                                                onClick={this._receiveRecommendation}
                                                className="custom-icon is-size-5"
                                            />
                                            {review.recomendations_count}
                                        </div> :
                                        <div className="centered-label">
                                            <AiOutlineLike
                                                onClick={this._receiveRecommendation}
                                                className="custom-icon is-size-5"
                                            /> 
                                            {review.recomendations_count}
                                        </div> 
                                    }   
                                    </div>
                                    <div className="column has-text-centered has-text-link">
                                    {
                                        this.props.auth.user && this.props.auth.user.id === review.user ?
                                            <Link to={"/editar/" + review.id}>
                                                <FaEdit className="is-size-5" />
                                            </Link> :
                                        ''
                                    } 
                                    </div>
                                    <div className="column has-text-centered has-text-danger-dark">
                                    {
                                        this.props.auth.user && this.props.auth.user.id === review.user ?
                                            <FaTrashAlt 
                                                onClick={this._showDeleteConfirmation}
                                                className="custom-icon is-size-6" 
                                            /> :
                                            ''
                                    } 
                                    </div>
                                    <div className="column has-text-centered">
                                    {
                                        auth.isAuthenticated && 
                                        review.favorite && 
                                        review.favorite.includes(auth.user.id) ?
                                        <div className="has-text-warning">                                        
                                            <BsBookmarkFill
                                                onClick={this._saveReview} 
                                                className="custom-icon is-size-5"
                                            />
                                        </div> :
                                        <div>
                                            <BsBookmark
                                                onClick={this._saveReview} 
                                                className="custom-icon is-size-5"
                                            />
                                        </div>
                                    }
                                    </div>
                                    <div className="column has-text-centered">
                                        <RiShareForwardFill 
                                            onClick={this._toggleModal}
                                            className="custom-icon is-size-5" 
                                        />
                                    </div >
                                    <div className="column has-text-centered">
                                        <BsFlagFill  
                                            onClick={this._handleReport} 
                                            className="custom-icon is-size-5" 
                                        />
                                    </div >
                                </div>
                            </div>
                            <div className="column has-text-centered has-text-weight-medium pt-0"> 
                                <div className="review-main-box mb-4 close-letters"> 
                                    <p>calificación</p>
                                    <p 
                                        className="is-size-4"
                                        style={ {color: _myColor(review.rating, "rating")} }
                                    >
                                        {review.rating}
                                    </p> 
                                </div>
                                <div className="review-main-box close-letters"> 
                                    <p>dificultad</p>
                                    <p 
                                        className="is-size-4"
                                        style={ {color: _myColor(review.difficulty, "difficulty")} }
                                    >
                                        {review.difficulty}%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.showDeleteMessage ?
                        <div className="column is-full">
                            ¿Eliminar reseña?
                            <p className="buttons">
                                <button 
                                    className="button is-small is-danger"
                                    onClick={this._handleDelete}
                                >
                                    Eliminar
                                </button>
                                <button 
                                    className="button is-small"
                                    onClick={this._showDeleteConfirmation}
                                >
                                    Cancelar
                                </button>
                            </p>
                        </div> :  
                        ''  
                    }
                    {this.state.showLoginMessage ?
                        <div className="column is-full">
                            <p>Inicia sesión para recomendar esta reseña</p>
                            <Link to="/iniciar-sesion">
                                <button className="button is-small is-link mt-1">
                                    Iniciar sesión
                                </button>
                            </Link>
                        </div> :  
                        ''  
                    }
                    {this.state.showLoginMessageForSave ?
                        <div className="column is-full">
                            <p>Inicia sesión para guardar esta reseña</p>
                            <Link to="/iniciar-sesion">
                                <button className="button is-small is-link mt-1">
                                    Iniciar sesión
                                </button>
                            </Link>
                        </div> :  
                        ''  
                    }
                    {this.state.showLoginMessageForReport ?
                        <div className="column is-full">
                            <p>Inicia sesión para reportar contenido inapropiado</p>
                            <Link to="/iniciar-sesion">
                                <button className="button is-small is-link mt-1">
                                    Iniciar sesión
                                </button>
                            </Link>
                        </div> :  
                        ''  
                    }
                    {this.state.showReportConfirmation ?
                        <div className="column is-full">
                            ¿Reportar reseña?
                            <p className="buttons">
                                <button 
                                    className="button is-small is-danger"
                                    onClick={this._reportReview}
                                >
                                    Reportar
                                </button>
                                <button 
                                    className="button is-small"
                                    onClick={this._handleReport}
                                >
                                    Cancelar
                                </button>
                            </p>
                        </div> :  
                        ''  
                    }
                    <div className={`modal ${this.state.showModal ? "is-active" : "" }`}>
                        <div className="modal-background"></div>
                        <div className="modal-card pl-6 pr-6">
                            <header className="modal-card-head">
                                <p className="modal-card-title">Compartir</p>
                                <button 
                                    className="delete"
                                    onClick={this._toggleModal}
                                />
                            </header>
                            <section className="modal-card-body">
                                <div className="columns has-text-centered">
                                    <div className="column is-4">
                                        <ImEmbed className="is-size-2" />
                                        <p>Incorporar</p>
                                    </div>
                                    <div className="column is-4">
                                        <FaFacebook className="is-size-2" />
                                        <p>Facebook</p>
                                    </div>
                                    <div className="column is-4">
                                        <AiFillTwitterCircle className="is-size-2" />
                                        <p>Twitter</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                }
            </div>
            <RightPanel />
        </div>
        );
    }
}

const mapStateToProps = state => ({
    review: state.reviews.review,
    wasDeleted: state.reviews.wasDeleted,
    isLoading: state.reviews.isLoading,
    error: state.error,
    auth : state.auth,
});

export default connect(
    mapStateToProps, 
    {getReview, clearReview, deleteReview, recommendReview, saveReview, reportReview, clearErrors}
)(ReviewDetail);