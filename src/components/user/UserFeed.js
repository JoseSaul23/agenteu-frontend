import React, {Component} from 'react'
import {ReviewsList} from '../review/ReviewsList'
import {BiNews} from 'react-icons/bi'
import {RightPanel} from '../common/RightPanel'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

export class UserFeed extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    render () {

        if (!this.props.isAuthenticated){
            return (
                <div className="columns pt-6">
                    <div className="column is-half is-offset-one-quarter has-text-centered pt-6">
                        <div className="m-5">
                            <BiNews className="is-size-1" />
                        </div>
                        <div className="m-5">
                            <h4 className="title is-4">Mira las ultimas reseñas</h4>
                        </div>
                        <div className="m-5">
                            <p>
                                Inicia sesión para ver las ultimas reseñas de tu universidad, tu escuela y los profesores de tu escuela
                            </p>
                        </div>
                        <div className="m-5">
                            <Link to="/iniciar-sesion">
                                <button className="button is-link">Iniciar sesión</button>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }
        
        return (
            <div className="columns">
                <div className="column is-two-thirds pr-0">
                    <div className="columns is-multiline is-centered pl-4">
                        <div className="column m-5" >
                            <div className="columns has-text-centered">
                                <div className="column">
                                    <div className="select is-small">
                                        <select>
                                            <option>Selecciona tu universidad</option>
                                            <option>Universidad Industrial de Santander</option>
                                            <option>Universidad Nacional de Colombia</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="select is-small">
                                        <select>
                                            <option>Selecciona tu escuela</option>
                                            <option>Escuela de Ingenieria de Sistemas</option>
                                            <option>Escuela de Ingenieria Industrial</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-four-fifths mt-2">
                            {/* <ReviewsList /> */}
                        </div>
                    </div>
                </div>
                <RightPanel />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(UserFeed);