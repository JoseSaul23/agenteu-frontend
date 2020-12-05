import React, {Component} from 'react'
import logo from '../logo.png'

export class InstitutionInMenu extends Component {
    render () {
      const {name, logo_img, overall_difficulty, overall_rating, reviews_count} = this.props
      return (
        <div className="institutionMenu-wrapper column is-one-quarter mb-5">
          <img src={logo} alt="logo"/>
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
                <p>{overall_rating? overall_rating : "N/A"}</p>
              </div>
              <div className="mt-1">
                <p className="institution-labels">dificultad</p>
                <p>{overall_difficulty? overall_difficulty + "%": "N/A"}</p>
              </div>
            </div> 
          </div>
        </div>
      );
    }
}