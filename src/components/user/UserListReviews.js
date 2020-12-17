import React, {Component} from 'react'
import Review from '../review/Review'
import {connect} from 'react-redux'
import {getUserReviews, clearReviews} from '../actions/reviewActions'
import PropTypes from 'prop-types'

export class UserListReviews extends Component {

    static propTypes = {
        reviews: PropTypes.array.isRequired,
        getUserReviews: PropTypes.func.isRequired,
        clearReviews: PropTypes.func.isRequired
    }
  
    componentDidMount() {
        // Tipo de reseña de usuario que ver (creadas, favoritas, recomendadas)
        const {review_type} = this.props

        // Traer reseñas
        this.props.getUserReviews(review_type)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.review_type !== this.props.review_type){
            this.props.getUserReviews(this.props.review_type)
        }
    }

    componentWillUnmount() {
        // Limpiar reseñas cargadas
        this.props.clearReviews()
    }

    _renderReviews = () => {
        //cambiar mensaje por cargando
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
                    />
                  );
            }   )
        } 
      }

    render () {
        return (
            <div>
                {this._renderReviews()}
            </div>  
        );
    }
}

const mapStateToProps = state => ({
    reviews : state.reviews.reviews,
});

export default connect(mapStateToProps, {getUserReviews, clearReviews})(UserListReviews);