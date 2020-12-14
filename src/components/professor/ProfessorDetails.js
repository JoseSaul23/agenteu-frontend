import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoIosNotifications} from 'react-icons/io'
import {_myColor} from '../common/util'

export class ProfessorDetails extends Component {
    state = {
        professor: {},
    }

    _fetchProfessor= () => {
        fetch("http://localhost:8000/api/profesores/" + this.props.match.params.id)
      .then(res => res.json())
      .then(professor => {
        this.setState({ professor })
      }) 
    }

    componentDidMount() {
        this._fetchProfessor()
    }
    
    componentDidUpdate (prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) { 
            this._fetchProfessor()
        }
    }

    render () {
        const {
            id,
            name,
            professor_school,
            professor_school_name, 
            professor_university,
            professor_university_name,
            overall_difficulty,
            overall_rating,
            reviews_count,
            subscribers_count}
        = this.state.professor

        return (
            <div className="columns is-multiline">
                <div className="column">
                    <p className="black-title has-text-weight-medium big-text">{name}</p>
                </div>
                <div className="column is-full pb-0 pt-0 closer-letters has-text-weight-medium">
                    <Link to={"/escuelas/" + professor_school}>
                        <p>{professor_school_name}</p>
                    </Link>
                    <Link to={"/universidades/" + professor_university}>
                        <p>de {professor_university_name}</p> 
                    </Link>
                </div>
                <div className="column">
                    <div className="columns is-vcentered is-mobile ">
                        <div className="column has-text-weight-medium is-three-quarters">
                            {reviews_count} reseñas
                        </div>
                        <div className="column">
                            <IoIosNotifications  className="is-size-2"></IoIosNotifications>
                        </div>
                    </div>
                    <div className="columns is-vcentered is-mobile has-text-weight-medium">
                        <div className="column has-text-centered Top-review-numbers">
                            <p>calificación general</p>
                            <p 
                                className="is-size-4 pt-2"
                                style={{color: _myColor(overall_rating, "rating")}} 
                            >
                                {overall_rating? overall_rating : "N/A"}
                            </p>
                        </div>
                        <div className="column has-text-centered Top-review-numbers">
                            <p>dificultad promedio</p>
                            <p 
                                className="is-size-4 pt-2"
                                style={{color: _myColor(overall_difficulty, "difficulty")}}
                            >
                                {overall_difficulty? overall_difficulty + "%": "N/A"}
                            </p>
                        </div>
                        <div className="column">
                            <Link to={"/publicar/" + id}>
                                <button className="button is-small is-link">
                                    <span className="medium-text has-text-weight-medium">Crear reseña</span>
                                </button>
                            </Link> 
                        </div>
                    </div>
                    <div className="pb-3 has-text-weight-medium mt-2 mb-2">
                        <span className="black-title">{subscribers_count}</span> usuarios esperan nueva reseña
                    </div>
                </div>
            </div>
        );
    }
}