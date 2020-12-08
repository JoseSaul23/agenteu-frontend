import React, {Component} from 'react'
import {ReviewsList} from './ReviewsList'
import {SideList} from './SideList'

export class UserFeed extends Component {
    render () {
        return (
            <div className="columns">
                <div className="column is-two-thirds pr-0">
                    <div className="columns is-multiline is-centered pl-4">
                        <div className="column m-5" >
                            <div className="columns has-text-centered">
                                <div className="column">
                                    <div class="select is-small">
                                        <select>
                                            <option>Selecciona tu universidad</option>
                                            <option>Universidad Industrial de Santander</option>
                                            <option>Universidad Nacional de Colombia</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="column">
                                    <div class="select is-small">
                                        <select>
                                            <option>Selecciona tu escuela</option>
                                            <option>Escuela de Ingenieria de Sistemas</option>
                                            <option>Escuela de Ingenieria Industrial</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-four-fifths mt-2">
                            <ReviewsList />
                        </div>
                    </div>
                </div>
                {/* Convertir el panel en un Componente */}
                <div className="column right-side-panel is-hidden-mobile">
                   <SideList />
                </div>
            </div>
        );
    }
}