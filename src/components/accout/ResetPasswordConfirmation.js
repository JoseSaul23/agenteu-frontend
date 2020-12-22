import React, {Component} from 'react'
import logoicono from '../../logo-icono.png'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {resetPasswordConfirm} from '../actions/authActions'
import {clearErrors} from '../actions/errorActions'

export class ResetPasswordConfirmation extends Component {

    state = {
        uid: '',
        token: '',
        new_password: '',
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        resetPasswordConfirm: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        const {uid, token, new_password} = this.state
        this.props.resetPasswordConfirm(uid, token, new_password)
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
                        <h4 className="title is-4">Ingresa tu nueva contraseña</h4>
                    </div>
                    <form onSubmit={this._handleSubmit}>
                        <div className="field">
                            <p className="control">
                                <input
                                    className="input is-medium"
                                    type="password"
                                    placeholder="nueva contraseña"
                                    name="new_password"
                                    onChange={this._handleChange}
                                />
                            </p>
                            <p className="has-text-danger">
                                {error.message.new_password ? error.message.new_password : '' }
                            </p>
                        </div>
                        <div className="field mt-5 is-grouped is-grouped-centered">
                            <div className="buttons">
                                <button type="submit" className="button is-link is-medium has-text-white has-text-weight-bold">
                                    Cambiar contraseña
                                </button>
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

export default connect(mapStateToProps, { resetPasswordConfirm, clearErrors })(ResetPasswordConfirmation);