import React, {Component} from 'react'
import Review from './Review'
import {connect} from 'react-redux'
import {getEntityReviews, clearReviews} from '../actions/reviewActions'
import PropTypes from 'prop-types'

export class ReviewsList extends Component {

    static propTypes = {
        reviews: PropTypes.array.isRequired,
        getEntityReviews: PropTypes.func.isRequired,
        clearReviews: PropTypes.func.isRequired,
        isLoading: PropTypes.bool
    }
  
    componentDidMount() {
        // Tipo de entidad que llega como prop
        const {entity} = this.props

        // Id de la entidad en parametro
        const {id} = this.props.match.params

        // Traer reseñas
        this.props.getEntityReviews(entity, id)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.id !== this.props.match.params.id){
            const {entity} = this.props
            const {id} = this.props.match.params
            this.props.getEntityReviews(entity, id)
        }
    }

    componentWillUnmount() {
        // Limpiar reseñas cargadas
        this.props.clearReviews()
    }

    _renderReviews = () => {
        if (this.props.reviews.length === 0) {
            return (
                <div className="mb-6">
                    No hay reseñas, pero puedes ser el primero!
                </div>
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
            this.props.isLoading ?
                <div className="columns mb-6">
                    <div className="column has-text-centered">
                        <button className="button is-link is-loading">Loading</button>
                    </div>
                </div> :
                <div>
                    {this._renderReviews()}
                </div>  
        );
    }
}

const mapStateToProps = state => ({
    reviews : state.reviews.reviews,
    isLoading: state.reviews.isLoading
});

export default connect(mapStateToProps, {getEntityReviews, clearReviews})(ReviewsList);