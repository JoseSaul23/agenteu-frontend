import React, {Component} from 'react'

export class ReviewInResults extends Component {
    render () {
        return (
            <div className="column is-three-fifths mb-5">
                <div className="columns is-7">
                    <div className="column is-two-fifths Top-review-box p-2">
                        <div className="Results-review-text has-text-weight-medium">
                            {/* regresar short-text de API */}
                            <p>Texto Texto Texto TextoTexto Texto Texto TextoTextoTexto Texto Texto xto Texto TextoTexto Texto Texto TextoTextoTexto Texto Texto</p>
                        </div>
                    </div>
                    <div className="column pr-4 pl-4 pt-0"> 
                        <div className="pb-3">
                            <p className="has-text-weight-medium">Por usuarioX - 28 sep 2020</p>
                            <p className="institution-labels">sobre Amaranta Jose Galileo Gutierrez</p>
                        </div>
                        <div className="columns is-mobile">
                            <div className="column has-text-centered is-one-quarter">
                                <p className="institution-labels">calificación</p>
                                <p>5</p>
                            </div>
                            <div className="column has-text-centered is-one-quarter">
                                <p className="institution-labels">dificultad</p>
                                <p>60%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}