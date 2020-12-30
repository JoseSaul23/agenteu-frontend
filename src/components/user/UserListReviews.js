import React, {Component} from 'react'
import Review from '../review/Review'
import {connect} from 'react-redux'
import {getUserReviews, clearReviews} from '../actions/reviewActions'
import PropTypes from 'prop-types'
import { Waypoint } from 'react-waypoint';


export class UserListReviews extends Component {

    static propTypes = {
        reviews: PropTypes.array.isRequired,
        getUserReviews: PropTypes.func.isRequired,
        clearReviews: PropTypes.func.isRequired,
        areLoading: PropTypes.bool
    }
  
    componentDidMount() {
        // Tipo de reseña de usuario que ver (creadas, favoritas, recomendadas, feed)
        const {review_type} = this.props

        // Traer reseñas
        this.props.getUserReviews(review_type)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.review_type !== this.props.review_type){
            this.props.clearReviews()
            this.props.getUserReviews(this.props.review_type)
        }
    }

    _loadMore = () => {
        if(this.props.nextPage) this.props.getUserReviews(this.props.review_type, this.props.page + 1)
    }

    componentWillUnmount() {
        // Limpiar reseñas cargadas
        this.props.clearReviews()
    }

    _renderReviews = () => {
        if (this.props.reviews.length === 0) {
            return (
                <div>No hay reseñas, empieza ahora.</div>
            );
        }
        else {
            return this.props.reviews.map( review => {
                return (
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
                  );
            }   )
        } 
      }

    render () {
        return (
            <div>
            {this.props.areLoading ?
                <div className="columns mb-6">
                    <div className="column has-text-centered">
                        <button className="button is-link is-loading">Loading</button>
                    </div>
                </div> :
                this._renderReviews()
            }  
            {!this.props.loadingMore ? <Waypoint onEnter={this._loadMore} /> : ""}
            {this.props.loadingMore && 
                <div className="columns mt-6">
                    <div className="column has-text-centered">
                        <button className="button is-link is-loading">Loading</button>
                    </div>
                </div>
            }
            </div>  
        );
    }
}

const mapStateToProps = state => ({
    reviews : state.reviews.reviews,
    areLoading: state.reviews.areLoading,
    loadingMore: state.reviews.loadingMore,
    page: state.reviews.page,
    nextPage: state.reviews.nextPage
});

export default connect(mapStateToProps, {getUserReviews, clearReviews})(UserListReviews);