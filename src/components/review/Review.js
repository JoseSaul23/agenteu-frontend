import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineLike, AiFillLike, AiFillTwitterCircle} from 'react-icons/ai'
import {BsBookmark, BsBookmarkFill, BsFlagFill} from 'react-icons/bs'
import {RiShareForwardFill} from 'react-icons/ri'
import {FaTrashAlt, FaEdit, FaFacebook} from 'react-icons/fa'
import {ImEmbed} from 'react-icons/im'
import {_myColor} from '../common/util'
import {deleteReview, recommendReview, saveReview, reportReview} from '../actions/reviewActions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

export class Review extends Component {

    state = {
        showDeleteMessage: false,
        showLoginMessage: false,
        showLoginMessageForSave: false,
        showLoginMessageForReport: false,
        showReportConfirmation: false,
        showModal: false
    }

    static propTypes = {
        auth : PropTypes.object.isRequired,
        deleteReview: PropTypes.func.isRequired,
        saveReview: PropTypes.func.isRequired,
        recommendReview: PropTypes.func.isRequired,
        reportReview: PropTypes.func.isRequired,
    }

    _showDeleteConfirmation = () => {
        if (this.state.showReportConfirmation === true) {
            this.setState({ showReportConfirmation: false })
        }
        this.setState({showDeleteMessage: !this.state.showDeleteMessage})
    }

    _handleDelete = () => {
        this.props.deleteReview(this.props.id)
    }

    _receiveRecommendation = () => {
        if(this.props.auth.isAuthenticated) {
            this.props.recommendReview(this.props.id)
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
            this.props.saveReview(this.props.id)
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
        this.props.reportReview(this.props.id)
        this._handleReport()
    }

    _toggleModal = () => {
        this.setState({ showModal: !this.state.showModal })
    }

    render () {
        
        const {
            id,
            text,
            rating,
            difficulty,
            date,
            user,
            user_name,
            entity,
            entity_name,
            entity_type,
            recomendations_count,
            recomendations,
            favorite
        } = this.props

        const {auth} = this.props

        return (
            <div className="columns is-multiline mb-5">
                <div className="column is-full has-text-weight-medium small-label p-0 pl-1 closer-letters">
                    <p>
                        <span className="black-title">{user_name}</span> • {date}
                    </p>
                    <Link to={
                            entity_type === "Professor"
                            ? "/profesores/" + entity
                            : entity_type === "School"
                            ? "/escuelas/" + entity
                            : "/universidades/" + entity
                        }>
                        <p>sobre {entity_name}</p>
                    </Link>
                </div>
                <div className="column">
                    <div className="columns is-mobile">
                        <div className="column is-four-fifths review-main-box pt-2 pr-2 pl-2 pb-0"> 
                            <Link to={"/publicaciones/" + id}>
                                <div className="review-text"> 
                                    <p>
                                        {text}
                                    </p>
                                </div>
                            </Link>
                            <div className="columns is-mobile pt-2"> 
                                <div className="column is-6-desktop is-half-mobile icon">
                                    {
                                        auth.isAuthenticated && 
                                        recomendations && 
                                        recomendations.includes(auth.user.id) ?
                                        <div className="has-text-link">                                        
                                            <AiFillLike
                                                onClick={this._receiveRecommendation}
                                                className="custom-icon is-size-5"
                                            />
                                            {recomendations_count}
                                        </div> :
                                        <div>
                                            <AiOutlineLike
                                                onClick={this._receiveRecommendation}
                                                className="custom-icon is-size-5"
                                            /> 
                                            {recomendations_count}
                                        </div> 
                                    }   
                                </div>
                                <div className="column has-text-centered has-text-link">
                                    {
                                        this.props.auth.user && this.props.auth.user.id === user ?
                                            <Link to={"/editar/"+id}>
                                                <FaEdit className="is-size-5" />
                                            </Link> :
                                        ''
                                    } 
                                </div>
                                <div className="column has-text-centered has-text-danger-dark">
                                    {
                                        this.props.auth.user && this.props.auth.user.id === user ?
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
                                        favorite && 
                                        favorite.includes(auth.user.id) ?
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
                                    style={ {color: _myColor(rating, "rating")} }
                                >
                                    {rating}
                                </p> 
                            </div>
                            <div className="review-main-box close-letters"> 
                                <p>dificultad</p>
                                <p 
                                    className="is-size-4"
                                    style={ {color: _myColor(difficulty, "difficulty")} }
                                >
                                    {difficulty}%
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
        );
    }
}

const mapStateToProps = state => ({
    auth : state.auth,
});

export default connect(mapStateToProps, {deleteReview, recommendReview, saveReview, reportReview})(Review);