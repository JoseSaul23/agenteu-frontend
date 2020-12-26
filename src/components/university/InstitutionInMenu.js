import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {_myColor} from '../common/util'

export class InstitutionInMenu extends Component {
    render () {
      const {id, name, logo_img, overall_difficulty, overall_rating, reviews_count} = this.props
      return (
        <div className="institutionMenu-wrapper column is-3-desktop is-4-tablet is-12-mobile">
          <Link to={this.props.category ==="school" ? "/escuelas/"+ id : "/universidades/"+ id }>
            <img src={logo_img} alt="logo" className="ml-1"/>
            <div className="columns"> 
              <div className="column is-8 is-12-mobile has-text-weight-medium institutionMenu-info pb-0">
                <div>
                  <p>{name}</p>
                </div>
                <div className="mt-2">
                  <p>{reviews_count} Reseñas</p>
                </div>
              </div> 
              <div className="column columns is-mobile is-multiline">
                <div className="column is-half-mobile has-text-centered pb-0">
                  <p className="institution-labels">calificación</p>
                  <p 
                    style={{color: _myColor(overall_rating, "rating")}} 
                    className="has-text-weight-medium"
                  >
                    {overall_rating? overall_rating : "N/A"}
                  </p>
                </div>
                <div className="column has-text-centered">
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