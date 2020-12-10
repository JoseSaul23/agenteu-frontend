import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class ProfessorInMenu extends Component {
    render () {
      const {id, name, last_name, overall_rating, overall_difficulty, reviews_count, professor_university} = this.props
      return (
        <div className="card column is-one-quarter m-4 p-0">
          <Link to={"/profesores/" + id}>
          <header className="has-background-link">
            <p className="card-header-title has-text-white p-2">
              {name} {last_name}
            </p>
          </header>
          <div className="card-content p-2">
            <div className="content">
              {professor_university}
              <br/>
              <p>{reviews_count} Reseñas</p>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item p-1 has-text-centered">
              <p className="institution-labels has-text-weight-medium">calificación
                <br/>{overall_rating? overall_rating + "%": "N/A"}
              </p>
            </div>
            <div className="card-footer-item p-1 has-text-centered">
              <p className="institution-labels has-text-weight-medium">dificultad 
                <br/>{overall_difficulty? overall_difficulty + "%": "N/A"}
              </p>
            </div>
          </footer>
          </Link>
        </div>
      );
    }
}