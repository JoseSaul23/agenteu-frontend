import React, {Component} from 'react'
import Review from './Review'
import axios from 'axios'

export class ReviewsList extends Component {

    state = {
        reviews: []
    }

    url = ""

    _setURL = () => {
        const {entity} = this.props
        const {id} = this.props.match.params
        if (entity === "university") {
            this.url = `/api/universidades/${id}/reviews`
        } 
        if (entity === "school") {
            this.url = `/api/escuelas/${id}/reviews`
        } 
        if (entity === "professor") {
            this.url = `/api/profesores/${id}/reviews`
        } 
        // if (entity === "user-favorites") {
        //     this.url = `/api/universidades/${id}/reviews`
        // } 
        // if (entity === "user-reviews") {
        //     this.url = `/api/universidades/${id}/reviews`
        // } 
    }

    _fetchReviews = () => {
      axios.get("http://localhost:8000" + this.url)
      .then(res => {
        this.setState({ reviews: res.data })
      })
      .catch(e => console.log(e.response.data)) 
    }
  
    componentDidMount() {
        this._setURL()
        this._fetchReviews()
    }

    _renderReviews = () => {
        const {reviews} = this.state
        //cambiar mensaje por cargando
        if (reviews.length === 0) {
            return (
                <div>No hay reseñas</div>
            );
        }
        else {
            return reviews.map( review => {
                return (
                  <Review 
                    key={review.id} 
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