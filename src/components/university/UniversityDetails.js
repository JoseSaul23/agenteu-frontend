import React, {Component} from 'react'
import {IoIosNotifications} from 'react-icons/io'

export class UniversityDetails extends Component {

    state = {
        university: {}
    }

    _fetchUniversity = () => {
        fetch("http://localhost:8000/api/universidades/" + this.props.match.params.id)
      .then(res => res.json())
      .then(university => {
        this.setState({ university })
      }) 
    }

    componentDidMount() {
        this._fetchUniversity()
    }

    componentDidUpdate (prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) { 
            this._fetchUniversity()
        }
    }

    render () {
        const {name, logo, professors_count, overall_difficulty, overall_rating, reviews_count, subscribers_count} 
        = this.state.university

        return (
            <div className="columns is-multiline">
                <div className="column">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="column is-full black-title big-text pb-0 pt-0 has-text-weight-medium">
                    {name}
                </div>
                <div className="column">
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