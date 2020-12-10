import React, {Component} from 'react'
import {AiOutlineLike} from 'react-icons/ai'

export class TopReview extends Component {
    render () {
      const {text, rating, difficulty, date, user, entity, recomendations_count} = this.props
      
      return (
        <div className="column is-one-quarter mb-5">
          <div className="Top-review-box">
            <div className="Top-review-text has-text-weight-medium">
              <p>{text}</p>
            </div>
            <div className="Top-review-numbers columns is-mobile"> 
              <div className="column has-text-centered pb-1">
                <span className="review-numbers-label">calificación</span> <span className="review-numbers-value">{rating}</span>
              </div>
              <div className="column has-text-centered pb-1">
                <span className="review-numbers-label">dificultad</span> <span className="review-numbers-value">{difficulty}%</span>
              </div>
              <div className="column is-one-third p-0">
                <div className="mt-5 ml-4">
                  <AiOutlineLike className="is-size-5"></AiOutlineLike> <span className="has-text-weight-semibold">{recomendations_count}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="Top-review-especifics has-text-weight-medium">
            <p>Por {user} - {date}</p>
            <p>sobre {entity}</p>
          </div>
        </div>
      );
    }
}