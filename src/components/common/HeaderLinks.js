import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoIosNotifications} from 'react-icons/io'

export class HeaderLinks extends Component {
    render () {
        return (
        <ul className="has-text-centered">
            <Link to="/registro">
                <li className="button is-warning small-text mr-5">Registrarse</li>
            </Link>
            <Link to="/iniciar-sesion">
                <li className="button is-link small-text">Iniciar sesión</li>
            </Link>
            {/* <li className="button small-text mr-5"><IoIosNotifications  className="is-size-4"></IoIosNotifications></li>
            <li className="button is-link small-text">Username ⯆</li> */}
        </ul>
        );
    }
}