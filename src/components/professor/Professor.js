import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class Professor extends Component {
    render () {
        const {
            id,
            name,
            professor_university, 
            professor_university_name,
            professor_school,
            professor_school_name,
            overall_difficulty,
            overall_rating,
            reviews_count} 
        = this.props

        return (
            <div className="columns is-multiline">
                <div className="column is-full black-title big-text pb-0 has-text-weight-medium">
                    {name}
                </div>
                <div className="column">
                    <div className="Top-review-numbers">
                        <div>{professor_university_name}</div>
                        <div className="pb-3">{professor_school_name}</div>
                    </div> 
                    <div className="pb-3 has-text-weight-medium">{reviews_count} reseñas</div>
                    <div className="columns is-vcentered is-mobile">
                        <div className="column has-text-centered Top-review-numbers">
                            <p className="institution-labels">calificación</p>
                            <p className="has-text-success has-text-weight-medium">
                                {overall_rating? overall_rating : "N/A"}
                            </p>
                        </div>
                        <div className="column has-text-centered Top-review-numbers">
                            <p className="institution-labels">dificultad</p>
                            <p className="has-text-danger has-text-weight-medium">
                                {overall_difficulty? overall_difficulty + "%": "N/A"}
                            </p>
                        </div>
                        <div className="column">
                            <Link to={"/profesores/" + id}> 
                                <button className="button is-small is-link">
                                    <span className="medium-text has-text-weight-medium">Ver reseñas</span>
                                </button> 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}