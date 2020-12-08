import React, {Component} from 'react'
import {IoIosNotifications} from 'react-icons/io'
import logo from '../logo.png'

export class SchoolDetails extends Component {
    render () {
        return (
            <div className="columns is-multiline">
                <div className="column">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="column is-full pb-0 pt-0">
                    <p className="black-title has-text-weight-medium big-text">Escuela de Ingenieria de Sistemas</p>
                    <p className="institution-label">de Universidad Industrial de Santander</p> 
                </div>
                <div className="column">
                    {/* <div className="Top-review-numbers">
                        <div>Universidad Industrial de Santander</div>
                        <div className="pb-3">Escuela de Ingenieria de Sistemas</div>
                    </div>  */}
                    <div className="columns is-vcentered is-mobile ">
                        <div className="column has-text-weight-medium is-three-quarters">
                            23 reseñas | 220 profesores
                        </div>
                        <div className="column">
                            <IoIosNotifications  className="is-size-2"></IoIosNotifications>
                        </div>
                    </div>
                    <div className="columns is-vcentered is-mobile has-text-weight-medium">
                        <div className="column has-text-centered Top-review-numbers">
                            <p>calificación general</p>
                            <p className="has-text-success is-size-4 pt-2">5/5</p>
                        </div>
                        <div className="column has-text-centered Top-review-numbers">
                            <p>dificultad promedio</p>
                            <p className="has-text-danger is-size-4 pt-2">60%</p>
                        </div>
                        <div className="column">
                            <button className="button is-small is-link">
                                <span className="medium-text has-text-weight-medium">Crear reseña</span>
                            </button> 
                        </div>
                    </div>
                    <div className="pb-3 has-text-weight-medium mt-2 mb-2">
                        <span className="black-title">16</span> usuarios esperan nueva reseña
                    </div>
                </div>
            </div>
        );
    }
}