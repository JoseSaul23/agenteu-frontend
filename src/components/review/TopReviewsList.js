import React, {Component} from 'react'
import {TopReview} from './TopReview'

export class TopReviewsList extends Component {

    state = {
      topReviews: []
    }
  
    _fetchTopReviews = () => {
      fetch(`http://localhost:8000/api/publicaciones/`)
      .then(res => res.json())
      .then(topReviews => {
        this.setState({ topReviews })
      }) 
    }
  
    componentDidMount() {
      this._fetchTopReviews()
    }
  
    _renderTopReviews = () => {
      const {topReviews} = this.state 
      return topReviews.map( topReview => {
        return (
          <TopReview 
            key={topReview.id} 
            text={topReview.text}
            rating={topReview.rating}
            difficulty={topReview.difficulty}
            date={topReview.date}
            user={topReview.user}
            entity={topReview.entity}
            recomendations_count={topReview.recomendations_count}
            user_name={topReview.user_name}
            entity_name={topReview.entity_name}
            />
          );
      } )
    }
  
    render () {
      return (
        <div>
          <div className="m-3 ml-5">
            <h5 className="title is-5">Top reseñas</h5>
          </div>
          <div className="columns is-multiline m-2">
            {this._renderTopReviews()}
          </div>
        </div>
      );
    }
}