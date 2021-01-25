import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoIosNotifications} from 'react-icons/io'
import {_myColor} from '../common/util'
import {RedirectAs404} from '../common/RedirectAs404'
import {connect} from 'react-redux'
import {getEntity, clearEntity, subscribeToEntity} from '../actions/entityDetailsActions'
import {clearReview} from '../actions/reviewActions'
import PropTypes from 'prop-types'
import Skeleton from '@material-ui/core/Skeleton';


export class ProfessorDetails extends Component {

    state = {
        showLoginMessageForSubscribe: false
    }

    static propTypes = {
        getEntity: PropTypes.func.isRequired,
        entityDetails: PropTypes.object.isRequired,
        clearEntity: PropTypes.func.isRequired,
        subscribeToEntity: PropTypes.func.isRequired,
        clearReview: PropTypes.func.isRequired,
        auth: PropTypes.object,
        error: PropTypes.object.isRequired,
    }

    componentDidMount() {
        this.props.getEntity('profesores', this.props.match.params.id)
    }

    componentDidUpdate (prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) { 
            // eliminar reseña de usuario cuando se pasa de entidad a entidad
            this.props.clearReview()
            this.props.getEntity('profesores', this.props.match.params.id)
        }
    }

    _handleSubscription = () => {
        if(this.props.auth.isAuthenticated) {
            this.props.subscribeToEntity('profesores', this.props.match.params.id)
        }
        else{
            this.setState({
                showLoginMessageForSubscribe: !this.state.showLoginMessageForSubscribe
            })
        }
    }

    componentWillUnmount() {
        this.props.clearEntity()
        this.props.clearReview()
    }

    render () {

        if (this.props.error.status === 404) {
            return <RedirectAs404 location={this.props.location}/>
        }

        const {
            id,
            name,
            professor_school,
            professor_school_name, 
            professor_university,
            professor_university_name,
            overall_difficulty,
            overall_rating,
            reviews_count,
            subscribers_count,
            subscribers
        } = this.props.entityDetails.entity

        const {auth, review} = this.props

        if(this.props.entityDetails.entityIsLoading || this.props.isLoading){
            return (
                <div>
                    <Skeleton className="mt-3" variant="rectangular" width={280} height={30} />
                    <Skeleton className="mt-3" variant="rectangular" width={300} height={30} />
                    <Skeleton className="mt-3" variant="rectangular" width={310} height={30} />
                    <Skeleton className="mt-4" variant="rectangular" width={350} height={100} />
                    <Skeleton className="mt-3" variant="rectangular" width={300} height={20} />
                </div>
            );
        }

        return (
            <div className="columns is-multiline">
                <div className="column is-three-fifths">
                    <p className="black-title has-text-weight-medium big-text">{name}</p>
                </div>
                <div className="column is-three-fifths pb-0 pt-0 closer-letters has-text-weight-medium">
                    <Link to={"/escuelas/" + professor_school}>
                        <p>{professor_school_name}</p>
                    </Link>
                    <Link to={"/universidades/" + professor_university}>
                        <p>de {professor_university_name}</p> 
                    </Link>
                </div>
                <div className="column is-three-fifths">
                    <div className="columns is-vcentered is-mobile ">
                        <div className="column has-text-weight-medium is-three-quarters">
                            {reviews_count} reseñas
                        </div>
                        <div className="column">
                        {
                            auth.isAuthenticated && 
                            subscribers && 
                            subscribers.includes(auth.user.id) ?
                            <div className="tooltip">                                      
                                <IoIosNotifications
                                    onClick={this._handleSubscription} 
                                    className="custom-icon is-size-2 has-text-link"
                                /> 
                                <span className="tooltiptext">Desuscribirse</span>
                            </div> :
                            <div className="tooltip">
                                <IoIosNotifications
                                    onClick={this._handleSubscription}  
                                    className="custom-icon is-size-2"
                                />
                                <span className="tooltiptext">Suscribirse</span>
                            </div>
                        }
                        </div>
                    </div>
                    <div className="columns is-vcentered is-mobile has-text-weight-medium">
                        <div className="column has-text-centered Top-review-numbers">
                            <p>calificación general</p>
                            <p 
                                className="is-size-4 pt-2"
                                style={{color: _myColor(overall_rating, "rating")}} 
                            >
                                {overall_rating? overall_rating : "N/A"}
                            </p>
                        </div>
                        <div className="column has-text-centered Top-review-numbers">
                            <p>dificultad promedio</p>
                            <p 
                                className="is-size-4 pt-2"
                                style={{color: _myColor(overall_difficulty, "difficulty")}}
                            >
                                {overall_difficulty? overall_difficulty + "%": "N/A"}
                            </p>
                        </div>
                        <div className="column">
                        {   
                            this.props.review.id
                            ?
                            <Link to={"/editar/" + review.id}>
                                <button className="button is-small is-link">
                                    <span className="medium-text has-text-weight-medium">Modificar reseña</span>
                                </button> 
                            </Link>
                            :
                            <Link to={"/publicar/" + id}>
                                <button className="button is-small is-link">
                                    <span className="medium-text has-text-weight-medium">Crear reseña</span>
                                </button> 
                            </Link>
                        }
                        </div>
                    </div>
                    <div className="has-text-weight-medium mt-2">
                        <span className="black-title">{subscribers_count}</span> usuarios esperan nueva reseña
                    </div>
                    {
                        this.state.showLoginMessageForSubscribe ?
                        <div>
                            <p>Inicia sesión para suscribirte a este profesor</p>
                            <Link to="/iniciar-sesion">
                                <button className="button is-small is-link mt-1">
                                    Iniciar sesión
                                </button>
                            </Link>
                        </div> :  
                        ''  
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    entityDetails : state.entityDetails,
    review: state.reviews.review,
    isLoading: state.reviews.isLoading,
    error: state.error
});

export default connect(mapStateToProps, {getEntity, clearEntity, subscribeToEntity, clearReview})(ProfessorDetails);