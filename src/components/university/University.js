import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {_myColor} from '../common/util'

export class University extends Component {
    render () {
        const {id, name, logo, reviews_count, overall_rating, overall_difficulty} = this.props

        return (
        <div className="column is-7-mobile is-three-fifths-desktop is-5-fullhd mb-3">
            <div className="columns is-7">
                <div className="column is-half pt-0 pb-0">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="column pl-2 pr-4 pl-4"> 
                    <div className="has-text-weight-medium pb-3">{name}</div>
                    <div className="pb-3 has-text-weight-medium">{reviews_count} reseñas</div>
                    <div className="columns is-vcentered is-mobile">
                        <div className="column has-text-centered">
                            <p className="institution-labels">calificación</p>
                            <p 
                                style={{color: _myColor(overall_rating, "rating")}} 
                                className="has-text-weight-medium"
                            >
                                {overall_rating? overall_rating : "N/A"}
                            </p>
                        </div>
                        <div className="column has-text-centered">
                            <p className="institution-labels">dificultad</p>
                            <p 
                                style={{color: _myColor(overall_difficulty, "difficulty")}}
                                className="has-text-weight-medium"
                            >
                                {overall_difficulty? overall_difficulty + "%": "N/A"}
                            </p>
                        </div>
                        <div className="column">
                            <Link to={"/universidades/" + id}>
                                <button className="button is-small is-link">
                                    <span className="medium-text has-text-weight-medium">Ver reseñas</span>
                                </button> 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}