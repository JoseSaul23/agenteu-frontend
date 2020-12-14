import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {_myColor} from '../common/util'

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
                        <Link to={"/universidades/" + professor_university}>
                            <div>{professor_university_name}</div>
                        </Link>
                        <Link to={"/escuelas/" + professor_school}>
                            <div className="pb-3">{professor_school_name}</div>
                        </Link>
                    </div> 
                    <div className="pb-3 has-text-weight-medium">{reviews_count} reseñas</div>
                    <div className="columns is-vcentered is-mobile">
                        <div className="column has-text-centered Top-review-numbers">
                            <p className="institution-labels">calificación</p>
                            <p 
                                className="has-text-weight-medium"
                                style={{color: _myColor(overall_rating, "rating")}} 
                            >
                                {overall_rating? overall_rating : "N/A"}
                            </p>
                        </div>
                        <div className="column has-text-centered Top-review-numbers">
                            <p className="institution-labels">dificultad</p>
                            <p 
                                className="has-text-weight-medium"
                                style={{color: _myColor(overall_difficulty, "difficulty")}}
                            >
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