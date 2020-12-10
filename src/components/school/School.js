import React, {Component} from 'react'

export class School extends Component {
    render () {
        const {name, school_logo, school_university, overall_difficulty, overall_rating, reviews_count} 
        = this.props

        return (
        <div className="column is-three-fifths mb-3">
            <div className="columns is-7">
                <div className="column is-half">
                    <img src={school_logo} alt="logo"/>
                </div>
                <div className="column pl-2 pr-4 pl-4"> 
                    <div className="pb-3">
                        <p className="has-text-weight-medium">{name}</p>
                        <p className="institution-labels">de {school_university}</p>
                    </div>
                    <div className="pb-3 has-text-weight-medium">{reviews_count} reseñas</div>
                    <div className="columns is-vcentered is-mobile">
                        <div className="column has-text-centered">
                            <p className="institution-labels">calificación</p>
                            <p className="has-text-success has-text-weight-medium">{overall_rating? overall_rating : "N/A"}</p>
                        </div>
                        <div className="column has-text-centered">
                            <p className="institution-labels">dificultad</p>
                            <p className="has-text-success has-text-weight-medium">{overall_difficulty? overall_difficulty + "%": "N/A"}</p>
                        </div>
                        <div className="column">
                            <button className="button is-small is-link">
                                <span className="medium-text has-text-weight-medium">Ver reseñas</span>
                            </button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}