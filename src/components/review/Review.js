import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineLike} from 'react-icons/ai'
import {BsBookmark, BsFlagFill} from 'react-icons/bs'
import {RiShareForwardFill} from 'react-icons/ri'
import {FaTrashAlt, FaEdit} from 'react-icons/fa'
import {_myColor} from '../common/util'
import {deleteReview, recommendReview} from '../actions/reviewActions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

export class Review extends Component {

    state = {
        showDeleteMessage: false,
        showLoginMessage: false,
    }

    static propTypes = {
        auth : PropTypes.object.isRequired,
        deleteReview: PropTypes.func.isRequired,
        recommendReview: PropTypes.func.isRequired
    }

    _showDeleteConfirmation = () => {
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
            this.setState({ showLoginMessage: !this.state.showLoginMessage })
        }
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
            recomendations_count
        } = this.props

        return (
            <div className="columns is-multiline mb-5">
                <div className="column is-full has-text-weight-medium small-label p-0 pl-1 closer-letters">
                    <p>
                        <span className="black-title">{user_name}</span> - {date}
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
                            <div className="review-text"> 
                                <p>
                                    {text}
                                </p>
                            </div>
                            <div className="columns is-mobile pt-2"> 
                                <div className="column is-6-desktop is-half-mobile icon">
                                    <AiOutlineLike
                                        onClick={this._receiveRecommendation}
                                        className="custom-icon is-size-5"
                                    />
                                    {recomendations_count}    
                                </div>
                                <div className="column has-text-centered has-text-link">
                                    {this.props.auth.user && this.props.auth.user.id === user 
                                        ? <Link to={"/editar/"+id}><FaEdit className="is-size-5" /></Link>  : ''} 
                                </div>
                                <div className="column has-text-centered has-text-danger-dark">
                                    {this.props.auth.user && this.props.auth.user.id === user
                                        ? <FaTrashAlt onClick={this._showDeleteConfirmation} className="custom-icon is-size-6" /> : ''} 
                                </div>
                                <div className="column has-text-centered">
                                    <BsBookmark className="is-size-5" />  
                                </div>
                                <div className="column has-text-centered">
                                    <RiShareForwardFill className="is-size-5" />
                                </div >
                                <div className="column has-text-centered">
                                    <BsFlagFill  className="is-size-5" />
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
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth : state.auth,
});

export default connect(mapStateToProps, {deleteReview, recommendReview})(Review);