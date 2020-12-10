import React, {Component} from 'react'
import {IoIosNotifications} from 'react-icons/io'

export class SchoolDetails extends Component {
    state = {
        school: {}
    }

    _fetchSchool = () => {
        fetch("http://localhost:8000/api/escuelas/" + this.props.match.params.id)
      .then(res => res.json())
      .then(school => {
        this.setState({ school })
      }) 
    }

    componentDidMount() {
        this._fetchSchool()
    }

    componentDidUpdate (prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) { 
            this._fetchSchool()
        }
    }

    render () {
        const {name, logo, school_university, professors_count, overall_difficulty, overall_rating, reviews_count, subscribers_count} 
        = this.state.school

        return (
            <div className="columns is-multiline">
                <div className="column">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="column is-full pb-0 pt-0">
                    <p className="black-title has-text-weight-medium big-text">{name}</p>
                    <p className="institution-label">de {school_university}</p> 
                </div>
                <div className="column">
                    {/* <div className="Top-review-numbers">
                        <div>Universidad Industrial de Santander</div>
                        <div className="pb-3">Escuela de Ingenieria de Sistemas</div>
                    </div>  */}
                    <div className="columns is-vcentered is-mobile ">
                        <div className="column has-text-weight-medium is-three-quarters">
                            {reviews_count} reseñas | {professors_count} profesores
                        </div>
                        <div className="column">
                            <IoIosNotifications  className="is-size-2"></IoIosNotifications>
                        </div>
                    </div>
                    <div className="columns is-vcentered is-mobile has-text-weight-medium">
                        <div className="column has-text-centered Top-review-numbers">
                            <p>calificación general</p>
                            <p className="has-text-success is-size-4 pt-2">
                                {overall_rating? overall_rating : "N/A"}
                            </p>
                        </div>
                        <div className="column has-text-centered Top-review-numbers">
                            <p>dificultad promedio</p>
                            <p className="has-text-danger is-size-4 pt-2">
                                {overall_difficulty? overall_difficulty + "%": "N/A"}
                            </p>
                        </div>
                        <div className="column">
                            <button className="button is-small is-link">
                                <span className="medium-text has-text-weight-medium">Crear reseña</span>
                            </button> 
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