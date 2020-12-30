import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoIosNotifications} from 'react-icons/io'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../actions/authActions'
import Badge from '@material-ui/core/Badge';
import {MdKeyboardArrowRight} from 'react-icons/md'
import {RiAccountPinCircleFill} from 'react-icons/ri'


class HeaderLinks extends Component {

    state = {
        active_notifications_count: 0
    }

    static propTypes = {
        user : PropTypes.object,
        logout : PropTypes.func.isRequired
    }

    componentDidMount() {
        if(this.props.isAuthenticated) {
            let endpoint  = "ws://127.0.0.1:8000/ws/notificaciones/";
            let socket = new WebSocket(endpoint + `?token=${this.props.auth_token}`)
            socket.onmessage = (event) => {
                this.setState({
                    active_notifications_count: JSON.parse(event.data).active_notifications_count 
                })
            }
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.isAuthenticated !== this.props.isAuthenticated) {
            if(this.props.isAuthenticated){
                let endpoint  = "ws://127.0.0.1:8000/ws/notificaciones/";
                let socket = new WebSocket(endpoint + `?token=${this.props.auth_token}`)
                socket.onmessage = (event) => {
                    this.setState({
                        active_notifications_count: JSON.parse(event.data).active_notifications_count 
                    })
                }
            }
        }
    }

    render () {
        console.log("notiii", this.state, this.props)
        const {isAuthenticated, user} = this.props
        
        const authLinks = (
            <ul className="has-text-centered">
                <Link to="/notificaciones">
                    <li className="button small-text mr-5">
                        <Badge 
                            // badgeContent={user ? user.active_notifications_count : 0} 
                            badgeContent={this.state.active_notifications_count}
                            color="secondary"
                        >
                            <IoIosNotifications  className="is-size-4" />
                        </Badge>
                    </li>
                </Link>
                <li className="dropdown is-right is-hoverable">
                    <div className="dropdown-trigger">
                        <button className="button is-link small-text">
                            <span>{user ? user.username : ''} ⯆</span>
                        </button>
                    </div>
                    <div className="dropdown-menu pl-6" role="menu">
                        <div className="dropdown-content has-text-left">
                            <Link to="/cuenta" className="dropdown-item">
                                <div className="centered-label level">
                                    <span>Cuenta</span>
                                    <MdKeyboardArrowRight size={25} className="level-right"/>
                                </div>
                            </Link>
                            <Link to="/mis-publicaciones" className="dropdown-item">
                                <div className="centered-label level">
                                    <span>Mis reseñas</span>
                                    <MdKeyboardArrowRight size={25} className="level-right"/>
                                </div>
                            </Link>
                            <Link to="/ajustes" className="dropdown-item">
                                <div className="centered-label level">
                                    <span>Ajustes</span>
                                    <MdKeyboardArrowRight size={25} className="level-right"/>
                                </div>
                            </Link>
                            <Link to="/" onClick={this.props.logout} className="dropdown-item">
                                <div className="centered-label level">
                                    <span>Cerrar sesión</span>
                                    <MdKeyboardArrowRight size={25} className="level-right"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </li>
            </ul>
        )

        const guestLinks = (
            <React.Fragment>
            <ul className="has-text-centered is-hidden-mobile">
                <Link to="/registro">
                    <li className="button is-warning small-text mr-5">Registrarse</li>
                </Link>
                <Link to="/iniciar-sesion">
                    <li className="button is-link small-text">Iniciar sesión</li>
                </Link>
            </ul>
            {/* MOBILE GUEST LINKS */}
            <div className="dropdown is-hoverable is-right is-hidden-desktop">
                <div className="dropdown-trigger centered-label">
                    <RiAccountPinCircleFill size={25} />
                </div>
                <div className="dropdown-menu">
                    <div className="dropdown-content">
                        <Link to="/registro">
                            <div className="mb-1">
                                Registrarse
                            </div>
                        </Link>
                        <Link to="/iniciar-sesion">
                            <div className="mb-1">
                                Iniciar sesión
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
        return (
            <React.Fragment>
                { isAuthenticated ? authLinks : guestLinks }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    auth_token: state.auth.auth_token
})

export default connect(mapStateToProps, {logout})(HeaderLinks)