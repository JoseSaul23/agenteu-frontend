import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {_myColor} from '../common/util'

export class InstitutionInMenu extends Component {
    render () {
      const {id, name, logo_img, overall_difficulty, overall_rating, reviews_count} = this.props
      return (
        <div className="institutionMenu-wrapper column is-one-quarter mb-5">
          <Link to={this.props.category ==="school" ? "/escuelas/"+ id : "/universidades/"+ id }>
            <img src={logo_img} alt="logo"/>
            <div className="columns is-mobile"> 
              <div className="column is-two-thirds has-text-weight-medium institutionMenu-info">
                <div>
                  <p>{name}</p>
                </div>
                <div className="institutionMenu-reviews">
                  <p>{reviews_count} Reseñas</p>
                </div>
              </div> 
              <div className="column has-text-centered">
                <div>
                  <p className="institution-labels">calificación</p>
                  <p 
                    style={{color: _myColor(overall_rating, "rating")}} 
                    className="has-text-weight-medium"
                  >
                    {overall_rating? overall_rating : "N/A"}
                  </p>
                </div>
                <div className="mt-1">
                  <p className="institution-labels">dificultad</p>
                  <p 
                    style={{color: _myColor(overall_difficulty, "difficulty")}}
                    className="has-text-weight-medium"  
                  >
                    {overall_difficulty? overall_difficulty + "%": "N/A"}
                  </p>
                </div>
              </div> 
            </div>
          </Link>
        </div>
      );
    }
}