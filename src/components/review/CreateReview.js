import React, {Component} from 'react'

export class CreateReview extends Component {
    render () {
        return (
            <div>
                <div className="m-3 ml-5">
                    <h5 className="title is-5">Es hora de escribir sobre Universidad Industrial de Santander.</h5>
                </div>
                <div className="columns">
                    <div className="column is-three-fifths pt-0">
                        <form className="columns is-multiline m-2">
                            <div class="column is-full field is-four-fifths">
                                <label class="label">Escribe tu reseña: </label>
                                <div class="control">                 
                                    <textarea class="textarea" placeholder="" rows="4"></textarea>
                                </div>
                                <p className="small-label">Quedan 200 caracteres</p>
                            </div>
                            <div className="column is-full pt-0">
                                <div className="columns is-multiline is-mobile is-vcentered">
                                    <div className="column is-12-mobile is-6-desktop black-title has-text-weight-medium">
                                        Danos su porcentaje de dificultad:
                                    </div>
                                    <div className="column is-6-mobile is-3-desktop pl-0 pr-0">
                                        <input type="range"  min="10" max="100" step="10" />
                                    </div>
                                    <div className="column is-6-mobile is-1-desktop pl-0 big-text">
                                        65%
                                    </div>
                                </div>
                                <div className="columns is-multiline is-mobile is-vcentered">
                                    <div className="column is-12-mobile is-6-desktop black-title has-text-weight-medium">
                                        Danos su calificación general:
                                    </div>
                                    <div className="column is-6-mobile is-3-desktop pl-0 pr-0">
                                        <input type="range"  min="1" max="5" step="1" />
                                    </div>
                                    <div className="column is-6-mobile is-1-desktop pl-0 big-text">
                                        4
                                    </div>
                                </div>
                            </div>
                            <div className="column field mt-4">
                                <p className="control has-text-centered">
                                    <button className="button is-link is-normal">
                                        Crear reseña
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="column">
                        Caja de indicaciones
                    </div>
                </div>
            </div>
        );
    }
} 