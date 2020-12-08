import React, {Component} from 'react'

export class Professor extends Component {
    render () {
        return (
        // <div className="column is-one-quarter mb-3">
            <div className="columns is-multiline">
                <div className="column is-full black-title big-text pb-0 has-text-weight-medium">
                    Amaranta Jose Galileo Gomez
                </div>
                <div className="column">
                    <div className="Top-review-numbers">
                        <div>Universidad Industrial de Santander</div>
                        <div className="pb-3">Escuela de Ingenieria de Sistemas</div>
                    </div> 
                    <div className="pb-3 has-text-weight-medium">23 reseñas</div>
                    <div className="columns is-vcentered is-mobile">
                        <div className="column has-text-centered Top-review-numbers">
                            <p className="institution-labels">calificación</p>
                            <p className="has-text-success has-text-weight-medium">5</p>
                        </div>
                        <div className="column has-text-centered Top-review-numbers">
                            <p className="institution-labels">dificultad</p>
                            <p className="has-text-danger has-text-weight-medium">60%</p>
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