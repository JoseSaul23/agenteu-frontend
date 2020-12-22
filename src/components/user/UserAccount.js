import React, {Component} from 'react'
import RightPanel from '../common/RightPanel'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getUser, updateUser, updatePassword, updateEmail} from '../actions/authActions'
import {clearErrors} from '../actions/errorActions'


export class UserAccount extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        newPassword: '',
    }

    static propTypes = {
        getUser: PropTypes.func.isRequired,
        updateUser: PropTypes.func.isRequired,
        updatePassword: PropTypes.func.isRequired,
        updateEmail: PropTypes.func.isRequired,
        //no requerido, sale null al recargar
        user: PropTypes.object,
        error: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidMount () {
        this.props.getUser()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.user !== this.props.user){
            const {username, email} = this.props.user
            this.setState({ username, email })
        }
    }

    componentWillUnmount() {
        // Se limpian errores
        this.props.clearErrors()
    }

    _handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    _changeUsername = (e) => {
        e.preventDefault()
        const {username} = this.state
        this.props.updateUser({username})
    }

    _changeEmail = (e) => {
        e.preventDefault()
        const {email, password} = this.state
        this.props.updateEmail(email, password)
        e.target.reset()
    }

    _changePassword = (e) => {
        e.preventDefault()
        const {password, newPassword} = this.state
        this.props.updatePassword(password, newPassword)
        e.target.reset()
    }

    render () {

        const {username, email} = this.state
        const {error} = this.props

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
                                    <form onSubmit={this._changeUsername} className="columns">
                                        <div className="column is-4 has-text-weight-medium">
                                            Cambiar usuario
                                        </div>
                                        <div className="column is-4">
                                            <input 
                                                className="input is-small"
                                                type="text"
                                                name="username"
                                                onChange={this._handleChange}
                                                value={username}
                                            />
                                            <p className="has-text-danger">
                                                {error.message.username ? error.message.username : ""}
                                            </p>
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
                                    <form onSubmit={this._changeEmail} className="columns is-multiline">
                                        <div className="column is-4 has-text-weight-medium">
                                            Cambiar correo
                                        </div>
                                        <div className="column is-6">
                                            <input 
                                                className="input is-small"
                                                type="text"
                                                name="email"
                                                onChange={this._handleChange}
                                                value={email}
                                            />
                                            <p className="has-text-danger">
                                                {error.message.new_email ? error.message.new_email : ""}
                                            </p>
                                        </div>
                                        <div className="column is-4 has-text-weight-medium">
                                            Contraseña
                                        </div>
                                        <div className="column is-4">
                                            <input 
                                                className="input is-small"
                                                type="password"
                                                name="password"
                                                onChange={this._handleChange}
                                            />
                                            <p className="has-text-danger">
                                                {error.message.current_password ? error.message.current_password : ""}
                                            </p>
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
                                    <form onSubmit={this._changePassword} className="columns is-multiline">
                                        <div className="column is-4 has-text-weight-medium">
                                            Cambiar contraseña
                                        </div>
                                        <div className="column is-6">
                                            <input 
                                                className="input is-small"
                                                type="password"
                                                name="password"
                                                onChange={this._handleChange}
                                            />
                                            <p className="has-text-danger">
                                                {error.message.current_password ? error.message.current_password : ""}
                                            </p>
                                        </div>
                                        <div className="column is-4 has-text-weight-medium">
                                            Contraseña nueva
                                        </div>
                                        <div className="column is-4">
                                            <input
                                                className="input is-small"
                                                type="password"
                                                name="newPassword"
                                                onChange={this._handleChange}
                                            />
                                            <p className="has-text-danger">
                                                {error.message.new_password ? error.message.new_password : ""}
                                            </p>
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
                <RightPanel />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    error: state.error
});

export default connect(
    mapStateToProps,
    {getUser, clearErrors, updateUser, updatePassword, updateEmail}
)(UserAccount);