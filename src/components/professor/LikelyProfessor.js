import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class LikelyProfessor extends Component {
    render () {
        const {id, name, reviews_count} = this.props

        return (
            <div className="column is-full list-border-bottom has-text-weight-medium pt-2 pb-2">
                <div className="columns is-vcentered">
                    <div className="column is-two-thirds closer-letters">
                        <p className="black-title">{name}</p>
                        <p>{reviews_count} reseñas</p>
                    </div>
                    <div className="column has-text-centered">
                        <Link to={"/profesores/"+ id}>
                            <button className="button small-label is-link is-outlined">
                                Ver
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}