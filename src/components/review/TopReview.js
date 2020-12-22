import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineLike} from 'react-icons/ai'
import {_myColor} from '../common/util'

export class TopReview extends Component {

  truncate(str) {
    return str.length > 100 ? str.substring(0, 90) + "..." : str;
  }

  render () {

    const {
      id,
      text,
      rating,
      difficulty,
      date,
      user,
      user_name,
      entity,
      entity_name,
      entity_type,
      recomendations_count
    } = this.props
    
    return (
      <div className="column is-one-quarter mb-5">
        <div className="Top-review-box">
          <Link to={"/publicaciones/" + id}>
            <div className="Top-review-text has-text-weight-medium">
              <p>{this.truncate(text)}</p>
            </div>
          </Link>
          <div className="Top-review-numbers columns is-mobile"> 
            <div className="column has-text-centered pb-1">
              <p className="review-numbers-label">calificación</p>
              <p
                className="review-numbers-value has-text-weight-medium"
                style={{color: _myColor(rating, "rating")}}
              > 
                {rating}
              </p>
            </div>
            <div className="column has-text-centered pb-1">
              <p className="review-numbers-label">dificultad</p>
              <p 
                className="review-numbers-value has-text-weight-medium"
                style={{color: _myColor(difficulty, "difficulty")}}
              >
                {difficulty}%
              </p>
            </div>
            <div className="column is-one-third p-0">
              <div className="mt-5 ml-4">
                <AiOutlineLike className="is-size-5"></AiOutlineLike> <span className="has-text-weight-semibold">{recomendations_count}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="Top-review-especifics has-text-weight-medium">
          <p>Por {user_name} - {date}</p>
          <Link to={
                entity_type === "Professor"
                ? "/profesores/" + entity
                : entity_type === "School"
                ? "/escuelas/" + entity
                : "/universidades/" + entity
              }>
            <p>sobre {entity_name}</p>
          </Link>
        </div>
      </div>
    );
  }
}