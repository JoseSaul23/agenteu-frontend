import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {_myColor} from '../common/util'

export class ReviewInResults extends Component {

    truncate(str) {
        return str.length > 100 ? str.substring(0, 80) + "..." : str;
    }

    render () {
        const {
            id,
            text,
            rating,
            difficulty,
            date,
            user,
            user_name,
            entity,
            entity_type,
            entity_name
        } = this.props

        return (
            <div className="column is-three-fifths mb-5">
                <div className="columns is-7">
                    <div className="column is-two-fifths Top-review-box p-2">
                        <Link to={"/publicaciones/" + id}>
                            <div className="Results-review-text has-text-weight-medium">
                                <p className="text-overflow">{this.truncate(text)}</p>
                            </div>
                        </Link>
                    </div>
                    <div className="column pr-4 pl-4 pt-0"> 
                        <div className="pb-3">
                            <p className="has-text-weight-medium">Por {user_name} - {date}</p>
                            <Link to={
                                    entity_type === "Professor"
                                    ? "/profesores/" + entity
                                    : entity_type === "School"
                                    ? "/escuelas/" + entity
                                    : "/universidades/" + entity
                                }>
                                <p className="institution-labels">sobre {entity_name}</p>
                            </Link>
                        </div>
                        <div className="columns is-mobile">
                            <div className="column has-text-centered is-one-quarter">
                                <p className="institution-labels">calificación</p>
                                <p 
                                    className="has-text-weight-medium"
                                    style={ {color: _myColor(rating, "rating")} }
                                >
                                    {rating}
                                </p>
                            </div>
                            <div className="column has-text-centered is-one-quarter">
                                <p className="institution-labels">dificultad</p>
                                <p 
                                    className="has-text-weight-medium"
                                    style={ {color: _myColor(difficulty, "difficulty")} }
                                >
                                    {difficulty}%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}