import React, {Component} from 'react'
import logoicono from '../../logo-icono.png'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {register} from '../actions/authActions'
import {clearErrors} from '../actions/errorActions'

export class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const {username, email, password} = this.state
        this.props.register({username, email, password})
    }

    _handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    render () {
        if (this.props.isAuthenticated){
            return <Redirect to="/" />
        }

        const {username, email, password} = this.state
        const {error} = this.props

        return (
            <section className="section pt-3">
            <div className="container">
            <div className="columns is-centered">
            <div className="column is-two-fifths">
                <div className="has-text-centered">
                    <img src={logoicono} alt="logoicono" width="100" height="100"/>
                </div>
                <div>
                    <div className="ml-5 mr-5 mb-5 mt-0 has-text-centered">
                        <h4 className="title is-4">Registrarse en agenteUIS</h4>
                        <p className="has-text-danger">
                            {error.message.non_field_errors ? error.message.non_field_errors : '' }
                        </p>
                    </div>
                    <form onSubmit={this._handleSubmit}>
                        <div className="field">
                            <p className="control">
                                <input 
                                    className="input is-medium"
                                    name="username"
                                    type="text"
                                    placeholder="nombre de usuario"
                                    onChange={this._handleChange}
                                    value={username}
                                />
                            </p>
                            <p className="has-text-danger">
                                {error.message.username ? error.message.username : '' }
                            </p>
                        </div>
                        <div className="field mt-4">
                            <p className="control">
                                <input
                                    className="input is-medium"
                                    type="email"
                                    placeholder="correo"
                                    name="email"
                                    onChange={this._handleChange}
                                    value={email}
                                />
                            </p>
                            <p className="has-text-danger">
                                {error.message.email ? error.message.email : '' }
                            </p>
                        </div>
                        <div className="field mt-4">
                            <p className="control">
                                <input
                                    className="input is-medium"
                                    type="password"
                                    placeholder="contraseña"
                                    name="password"
                                    onChange={this._handleChange}
                                    value={password}
                                />
                            </p>
                            <p className="has-text-danger">
                                {error.message.password ? error.message.password : '' }
                            </p>
                        </div>
                        <div className="field mt-5">
                            <p className="control has-text-centered">
                                <button className="button is-warning is-medium has-text-white has-text-weight-bold">
                                    Registrarse
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

const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, {register, clearErrors})(Register)