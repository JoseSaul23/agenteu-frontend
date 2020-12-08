import React, {Component} from 'react'
import logoicono from '../logo-icono.png'

export class Login extends Component {
    render () {
        return (
            <section class="section pt-3">
            <div class="container">
            <div class="columns is-centered">
            <div class="column is-two-fifths">
                <div className="has-text-centered">
                    <img src={logoicono} alt="logoicono" width="100" height="100"/>
                </div>
                <div>
                    <div className="ml-5 mr-5 mb-5 mt-0 has-text-centered">
                        <h4 className="title is-4">Iniciar sesión en agenteUIS</h4>
                    </div>
                    <form>
                        <div className="field">
                            <p className="control">
                                <input className="input is-medium" type="email" placeholder="correo"/>
                            </p>
                        </div>
                        <div className="field mt-4">
                            <p className="control">
                                <input className="input is-medium" type="password" placeholder="contraseña" />
                            </p>
                        </div>
                        <div className="field mt-5">
                            <p className="control has-text-centered">
                                <button className="button is-link is-medium has-text-white has-text-weight-bold">
                                    Iniciar sesión
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            </div>
            </section>
        );
    }
}