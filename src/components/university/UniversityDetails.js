import React, {Component} from 'react'
import {IoIosNotifications} from 'react-icons/io'
import {_myColor} from '../common/util'
import {RedirectAs404} from '../common/RedirectAs404'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
    getEntity,
    clearEntity, 
    subscribeToEntity,
} from '../actions/entityDetailsActions'
import {clearReview} from '../actions/reviewActions'
import {clearErrors} from '../actions/errorActions'
import PropTypes from 'prop-types'
import Review from '../review/Review'
import Skeleton from '@material-ui/lab/Skeleton';

export class UniversityDetails extends Component {

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
        this.props.getEntity('universidades', this.props.match.params.id)
    }

    componentDidUpdate (prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) { 
            // eliminar reseña de usuario cuando se pasa de entidad a entidad
            this.props.clearReview()
            this.props.getEntity('universidades', this.props.match.params.id)
        }
    }

    _handleSubscription = () => {
        if(this.props.auth.isAuthenticated) {
            this.props.subscribeToEntity('universidades', this.props.match.params.id)
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
        this.props.clearErrors()
    }

    render () {

        if (this.props.error.status === 404) {
            return <RedirectAs404 location={this.props.location}/>
        }

        const {
            id,
            name,
            logo,
            professors_count,
            overall_difficulty,
            overall_rating, reviews_count,
            subscribers_count,
            subscribers
        } = this.props.entityDetails.entity

        const {auth, review} = this.props

        if(this.props.entityDetails.entityIsLoading){
            return (
                <div>
                    <Skeleton variant="rect" width={300} height={150} />
                    <Skeleton className="mt-3" variant="rect" width={300} height={20} />
                    <Skeleton className="mt-5" variant="rect" width={340} height={30} />
                    <Skeleton className="mt-4" variant="rect" width={360} height={120} />
                    <Skeleton className="mt-3 mb-5" variant="rect" width={300} height={20} />
                </div>
            );
        }

        return (
            <div className="columns is-multiline">
                <div className="column is-three-fifths">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="column is-full black-title big-text pb-0 pt-0 has-text-weight-medium">
                    {name}
                </div>
                <div className="column is-three-fifths">
                    <div className="columns is-vcentered is-mobile ">
                        <div className="column has-text-weight-medium is-three-quarters">
                            {reviews_count} reseñas | {professors_count} profesores
                        </div>
                        <div className="column">
                        {
                            auth.isAuthenticated && 
                            subscribers && 
                            subscribers.includes(auth.user.id) ?                                      
                            <IoIosNotifications
                                onClick={this._handleSubscription} 
                                className="custom-icon is-size-2 has-text-link"
                            /> :
                            <IoIosNotifications
                                onClick={this._handleSubscription}  
                                className="custom-icon is-size-2"
                            />
                        }
                        </div>
                    </div>
                    <div className="columns is-vcentered is-mobile has-text-weight-medium">
                        <div className="column has-text-centered Top-review-numbers">
                            <p>calificación general</p>
                            <p 
                                style={{color: _myColor(overall_rating, "rating")}} 
                                className="is-size-4 pt-2"
                            >
                                {overall_rating? overall_rating : "N/A"}
                            </p>
                        </div>
                        <div className="column has-text-centered Top-review-numbers">
                            <p>dificultad promedio</p>
                            <p 
                                style={{color: _myColor(overall_difficulty, "difficulty")}}
                                className="is-size-4 pt-2"
                            >
                                {overall_difficulty? overall_difficulty + "%": "N/A"}
                            </p>
                        </div>
                        <div className="column">
                        { 
                            this.props.isLoading ? 
                            "" :
                            this.props.review.id ?
                            "" :
                            <Link to={"/publicar/" + id}>
                                <button className="button is-small is-link">
                                    <span className="medium-text has-text-weight-medium">Crear reseña</span>
                                </button> 
                            </Link>
                        }
                        </div>
                    </div>
                    <div className="has-text-weight-medium mt-2">
                        <span className="black-title">{subscribers_count}</span> {subscribers_count === 1 ? "usuario espera" : "usuarios esperan"}  nueva reseña
                    </div>
                    {
                        this.state.showLoginMessageForSubscribe ?
                        <div>
                            <p>Inicia sesión para suscribirte a esta universidad</p>
                            <Link to="/iniciar-sesion">
                                <button className="button is-small is-link mt-1">
                                    Iniciar sesión
                                </button>
                            </Link>
                        </div> :  
                        ''  
                    }
                </div>
                {
                review.id
                ?   <div className="column pt-0">
                        <Review 
                            key={review.id}
                            id={review.id} 
                            text={review.text}
                            rating={review.rating}
                            difficulty={review.difficulty}
                            date={review.date}
                            user={review.user}
                            user_name={review.user_name}
                            entity={review.entity}
                            entity_name={review.entity_name}
                            entity_type={review.entity_type}
                            recomendations_count={review.recomendations_count}
                            recomendations={review.recomendations}
                            favorite={review.favorite}
                        />
                    </div> 
                :   ""
                }
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

export default connect(
    mapStateToProps,
    {getEntity, clearEntity, subscribeToEntity, clearReview, clearErrors}
)(UniversityDetails);