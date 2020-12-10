import React, {Component} from 'react'

export class ReviewInResults extends Component {
    render () {
        const {id, text, rating, difficulty, date, user, user_name, entity, entity_name} = this.props

        return (
            <div className="column is-three-fifths mb-5">
                <div className="columns is-7">
                    <div className="column is-two-fifths Top-review-box p-2">
                        <div className="Results-review-text has-text-weight-medium">
                            {/* regresar short-text de API */}
                            <p>{text}</p>
                        </div>
                    </div>
                    <div className="column pr-4 pl-4 pt-0"> 
                        <div className="pb-3">
                            <p className="has-text-weight-medium">Por {user_name} - {date}</p>
                            <p className="institution-labels">sobre {entity_name}</p>
                        </div>
                        <div className="columns is-mobile">
                            <div className="column has-text-centered is-one-quarter">
                                <p className="institution-labels">calificación</p>
                                <p>
                                    {rating}
                                </p>
                            </div>
                            <div className="column has-text-centered is-one-quarter">
                                <p className="institution-labels">dificultad</p>
                                <p>
                                    {difficulty}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}