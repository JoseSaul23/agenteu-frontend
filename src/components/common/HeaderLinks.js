import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoIosNotifications} from 'react-icons/io'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../actions/authActions'

export class HeaderLinks extends Component {

    static propTypes = {
        auth : PropTypes.object.isRequired,
        logout : PropTypes.func.isRequired
    }

    render () {

        const {isAuthenticated, user} = this.props.auth

        const authLinks = (
            <ul className="has-text-centered">
                <li className="button small-text mr-5">
                    <Link to="/notificaciones">
                        <IoIosNotifications  className="is-size-4" />
                    </Link>
                </li>
                <li className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                        <button className="button is-link small-text">
                            <span>{user ? user.username : ''} ⯆</span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div className="dropdown-content">
                            <Link to="/cuenta" className="dropdown-item">
                                Cuenta
                            </Link>
                            <Link to="/mis-publicaciones" className="dropdown-item">
                                Mis reseñas
                            </Link>
                            {/* <Link className="dropdown-item">
                                ajustes
                            </Link> */}
                            <Link to="/" onClick={this.props.logout} className="dropdown-item">
                                Cerrar sesión
                            </Link>
                        </div>
                    </div>
                </li>
            </ul>
        )

        const guestLinks= (
            <ul className="has-text-centered">
                <Link to="/registro">
                    <li className="button is-warning small-text mr-5">Registrarse</li>
                </Link>
                <Link to="/iniciar-sesion">
                    <li className="button is-link small-text">Iniciar sesión</li>
                </Link>
            </ul>
        )

        return (
            <React.Fragment>
                { isAuthenticated ? authLinks : guestLinks }
            </React.Fragment>
 
        );
    }
}

const mapStateToProps = (state) => {
    return {auth: state.auth}
}

export default connect(mapStateToProps, {logout})(HeaderLinks)