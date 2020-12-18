import React, {Component} from 'react'
import Review from './Review'
import {connect} from 'react-redux'
import {getEntityReviews, clearReviews} from '../actions/reviewActions'
import PropTypes from 'prop-types'

export class ReviewsList extends Component {

    static propTypes = {
        reviews: PropTypes.array.isRequired,
        getEntityReviews: PropTypes.func.isRequired,
        clearReviews: PropTypes.func.isRequired
    }
  
    componentDidMount() {
        // Tipo de entidad que llega como prop
        const {entity} = this.props

        // Id de la entidad en parametro
        const {id} = this.props.match.params

        // Traer reseñas
        this.props.getEntityReviews(entity, id)
    }

    componentWillUnmount() {
        // Limpiar reseñas cargadas
        this.props.clearReviews()
    }

    _renderReviews = () => {
        //cambiar mensaje por cargando
        if (this.props.reviews.length === 0) {
            return (
                <div>No hay reseñas</div>
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

export default connect(mapStateToProps, {getEntityReviews, clearReviews})(ReviewsList);