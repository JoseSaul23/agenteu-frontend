import React, {Component} from 'react'
import logoicono from '../../logo-icono.png'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../actions/authActions'
import {clearErrors} from '../actions/errorActions'

export class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password)
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

        const {email, password} = this.state
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
                        <h4 className="title is-4">Iniciar sesión en agenteUIS</h4>
                        <p className="has-text-danger">
                            {error.message.non_field_errors ? error.message.non_field_errors : '' }
                        </p>
                    </div>
                    <form onSubmit={this._handleSubmit}>
                        <div className="field">
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
                                <button type="submit" className="button is-link is-medium has-text-white has-text-weight-bold">
                                    Iniciar sesión
                                </button>
                            </p>
                        </div>
                    </form>
                    <div className="mt-3 has-text-centered has-text-link">
                        <Link to="/recuperar-cuenta">
                            <p>¿Has olvidado la contraseña?</p>
                        </Link>
                    </div>
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

export default connect(mapStateToProps, { login, clearErrors })(Login);

