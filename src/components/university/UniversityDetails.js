import React, {Component} from 'react'
import {IoIosNotifications} from 'react-icons/io'
import {_myColor} from '../common/util'
import axios from 'axios'
import {RedirectAs404} from '../common/RedirectAs404'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getReviewByUserOr404, clearReviewByUser} from '../actions/entityDetailsActions'
import PropTypes from 'prop-types'
import Review from '../review/Review'

export class UniversityDetails extends Component {

    state = {
        university: {},
        error: false,
        loading: true
    }

    static propTypes = {
        entityDetails: PropTypes.object.isRequired,
        getReviewByUserOr404: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        clearReviewByUser: PropTypes.func.isRequired
    }

    _fetchUniversity = () => {
        axios.get(`http://localhost:8000/api/universidades/${this.props.match.params.id}/`)
            .then(res => {
                this.setState({ university: res.data })
                if(this.props.isAuthenticated){
                    this.props.getReviewByUserOr404('universidades', this.props.match.params.id)
                }
                this.setState({loading: false})
            })
            .catch(e => this.setState({error:true}))
    }

    componentDidMount() {
        this._fetchUniversity()
    }

    componentDidUpdate (prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) { 
            this._fetchUniversity()
        }
    }

    componentWillUnmount() {
        this.props.clearReviewByUser()
    }

    render () {

        if (this.state.error) {
            return <RedirectAs404 location={this.props.location}/>
        }

        const {
            id,
            name,
            logo,
            professors_count,
            overall_difficulty,
            overall_rating, reviews_count,
            subscribers_count
        } = this.state.university

        const {reviewByUser} = this.props.entityDetails

        if( this.state.loading){
            return <button className="button is-link is-loading">Loading</button>
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
                            <IoIosNotifications  className="is-size-2"></IoIosNotifications>
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
                            { this.props.entityDetails.reviewByUser.id ?
                                "" :
                                <Link to={"/publicar/" + id}>
                                    <button className="button is-small is-link">
                                        <span className="medium-text has-text-weight-medium">Crear reseña</span>
                                    </button> 
                                </Link>
                            }
                        </div>
                    </div>
                    <div className="pb-3 has-text-weight-medium mt-2 mb-2">
                        <span className="black-title">{subscribers_count}</span> {subscribers_count === 1 ? "usuario espera" : "usuarios esperan"}  nueva reseña
                    </div>
                </div>
                {
                reviewByUser.id
                ?   <div className="column">
                        <Review 
                            key={reviewByUser.id}
                            id={reviewByUser.id} 
                            text={reviewByUser.text}
                            rating={reviewByUser.rating}
                            difficulty={reviewByUser.difficulty}
                            date={reviewByUser.date}
                            user={reviewByUser.user}
                            user_name={reviewByUser.user_name}
                            entity={reviewByUser.entity}
                            entity_name={reviewByUser.entity_name}
                            entity_type={reviewByUser.entity_type}
                            recomendations_count={reviewByUser.recomendations_count}
                        />
                    </div> 
                :   ""
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    entityDetails : state.entityDetails,
});

export default connect(mapStateToProps, {getReviewByUserOr404, clearReviewByUser})(UniversityDetails);