import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {_myColor} from '../common/util'

export class ProfessorInMenu extends Component {
    render () {
      const {id, name, overall_rating, overall_difficulty, reviews_count, professor_university_name} 
      = this.props

      return (
        <div className="card column is-one-quarter-desktop m-4 p-0">
          <Link to={"/profesores/" + id}>
          <header className="has-background-link">
            <p className="card-header-title has-text-white p-2">
              {name}
            </p>
          </header>
          <div className="card-content p-2">
            <div className="content">
              {professor_university_name}
              <br/>
              <p>{reviews_count} Reseñas</p>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item p-1 has-text-centered">
              <p className="institution-labels has-text-weight-medium">calificación
                <br/><span style={{color: _myColor(overall_rating, "rating")}} >{overall_rating? overall_rating: "N/A"}</span>
              </p>
            </div>
            <div className="card-footer-item p-1 has-text-centered">
              <p className="institution-labels has-text-weight-medium">dificultad 
                <br/><span style={{color: _myColor(overall_difficulty, "difficulty")}}>{overall_difficulty? overall_difficulty + "%": "N/A"}</span>
              </p>
            </div>
          </footer>
          </Link>
        </div>
      );
    }
}