import React, {Component} from 'react'
import logoicono from '../../logo-icono.png'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {resetPassword} from '../actions/authActions'
import {clearErrors} from '../actions/errorActions'

export class ResetPassword extends Component {

    state = {
        email: '',
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        resetPassword: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        this.props.resetPassword(this.state.email)
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

        const {email} = this.state
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
                    <div className="ml-2 mr-5 mb-5 mt-0">
                        <h4 className="title is-4">Recupera tu cuenta</h4>
                    </div>
                    <form onSubmit={this._handleSubmit}>
                        <div className="field">
                            <p className="control">
                                <input
                                    className="input is-medium"
                                    type="email"
                                    placeholder="correo electrónico"
                                    name="email"
                                    onChange={this._handleChange}
                                    value={email}
                                />
                            </p>
                            <p className="has-text-danger">
                                {error.message.email ? error.message.email : '' }
                                {error.message[0] ?error.message[0] : '' }
                            </p>
                        </div>
                        <div className="field mt-5 is-grouped is-grouped-centered">
                            <div className="buttons">
                                <button type="submit" className="button is-link is-medium has-text-white has-text-weight-bold">
                                    Buscar
                                </button>
                                <Link to="/iniciar-sesion">
                                    <button className="button is-medium has-text-weight-bold">
                                        Cancelar
                                    </button>
                                </Link>
                            </div>
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

export default connect(mapStateToProps, { resetPassword, clearErrors })(ResetPassword);