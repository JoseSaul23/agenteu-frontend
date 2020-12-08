import React, {Component} from 'react'
import {SideList} from './SideList'

export class UserAccount extends Component {
    render () {
        return (
            <div className="columns">
                <div className="column is-two-thirds pr-0 mt-4">
                    <div className="columns is-multiline is-centered pl-4">
                        <div className="column is-four-fifths mt-2">
                            <div className="side round-box pb-3 black-title">
                                <div className="p-4 pt-1 list-border-bottom has-text-weight-bold">
                                    Mi cuenta
                                </div>
                                <div className="pt-2 pb-2 pl-4 pr-4 list-border-bottom">
                                    <form className="columns">
                                        <div className="column is-4 has-text-weight-medium">
                                            Cambiar usuario
                                        </div>
                                        <div className="column is-4">
                                            <input class="input is-small" type="text" value="usuarioX" />
                                        </div>
                                        <div className="column is-2">
                                            <p className="control has-text-centered">
                                                <button className="button is-link is-small">
                                                    Guardar
                                                </button>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                                <div className="pt-2 pb-2 pl-4 pr-4 list-border-bottom">
                                    <form className="columns is-multiline">
                                        <div className="column is-4 has-text-weight-medium">
                                            Cambiar correo
                                        </div>
                                        <div className="column is-6">
                                            <input class="input is-small" type="text" value="user@correo.com" />
                                        </div>
                                        <div className="column is-4 has-text-weight-medium">
                                            Contraseña
                                        </div>
                                        <div className="column is-4">
                                            <input class="input is-small" type="password" />
                                        </div>
                                        <div className="column is-2">
                                            <p className="control has-text-centered">
                                                <button className="button is-link is-small">
                                                    Guardar
                                                </button>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                                <div className="pt-2 pb-2 pl-4 pr-4 list-border-bottom">
                                    <form className="columns is-multiline">
                                        <div className="column is-4 has-text-weight-medium">
                                            Cambiar contraseña
                                        </div>
                                        <div className="column is-6">
                                            <input class="input is-small" type="password" value="contraseña" />
                                        </div>
                                        <div className="column is-4 has-text-weight-medium">
                                            Contraseña nueva
                                        </div>
                                        <div className="column is-4">
                                            <input class="input is-small" type="password" />
                                        </div>
                                        <div className="column is-2">
                                            <p className="control has-text-centered">
                                                <button className="button is-link is-small">
                                                    Guardar
                                                </button>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right-side-panel is-hidden-mobile full-h">
                    <SideList />
                </div>
            </div>
        );
    }
}