import React, {Component} from 'react'

export class Professor extends Component {
    render () {
        const {name, professor_university, professor_school, overall_difficulty, overall_rating, reviews_count} 
        = this.props

        return (
        // <div className="column is-one-quarter mb-3">
            <div className="columns is-multiline">
                <div className="column is-full black-title big-text pb-0 has-text-weight-medium">
                    {name}
                </div>
                <div className="column">
                    <div className="Top-review-numbers">
                        <div>{professor_university}</div>
                        <div className="pb-3">{professor_school}</div>
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
                            <button className="button is-small is-link">
                                <span className="medium-text has-text-weight-medium">Ver reseñas</span>
                            </button> 
                        </div>
                    </div>
                </div>
            </div>
        // </div>
        );
    }
}