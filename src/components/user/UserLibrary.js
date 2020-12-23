import React, {Component} from 'react'
import {ProfileNavBar} from '../common/ProfileNavBar'
import UserListReviews from '../user/UserListReviews'
import {MdLibraryBooks} from 'react-icons/md' 
import RightPanel from '../common/RightPanel'
import {Link, Switch, Route, Redirect} from 'react-router-dom'
import {RedirectAs404} from '../common/RedirectAs404'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

export class UserLibrary extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    render () {

        if (!this.props.isAuthenticated) {
            return (
                <div className="columns pt-6">
                    <div className="column is-half is-offset-one-quarter has-text-centered pt-6">
                        <div className="m-5">
                            <MdLibraryBooks className="is-size-1" />
                        </div>
                        <div className="m-5">
                            <h4 className="title is-4">Guarda tus reseñas favoritas</h4>
                        </div>
                        <div className="m-5">
                            <p>
                                Inicia sesión para encontrar las reseñas que guardes o que recomiendes 
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
                <div className="column is-two-thirds">
                    <div className="columns is-multiline is-centered pl-4">
                        <div className="column mb-3">
                            <ProfileNavBar 
                                subject="library"
                                url={this.props.match.url}
                                location={this.props.location}
                            />
                        </div>
                        <div className="column is-four-fifths mt-2">
                            <Switch>
                                <Redirect exact from={this.props.match.url} to={this.props.match.url + "/favoritas"} />
                                <Route  
                                    path={this.props.match.path + "/favoritas"}
                                    render={(props) => (
                                        <UserListReviews {...props} review_type="favorites"/>
                                    )} 
                                />
                                <Route  
                                    path={this.props.match.path + "/recomendadas"}
                                    render={(props) => (
                                        <UserListReviews {...props} review_type="recommended"/>
                                    )} 
                                />
                                <Route component={RedirectAs404}/>
                            </Switch>
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

export default connect(mapStateToProps)(UserLibrary);