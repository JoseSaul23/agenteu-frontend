import React, {Component} from 'react'
import RightPanel from '../common/RightPanel'
import SubscriptionsList from './SubscriptionsList'
import {ProfileNavBar} from '../common/ProfileNavBar'
import {Switch, Route} from 'react-router-dom'


export class UserSettings extends Component {
    render () {
        return (
            <div className="columns">
                <div className="column is-8 pl-6 pt-5">
                    <h5 className="title is-5">Ajustes</h5>
                    <h6 className="title is-6">Suscripciones</h6>
                    <ProfileNavBar 
                        subject="subscriptions"
                        url={this.props.match.url}
                        location={this.props.location}
                    />
                    <div className="pl-4 mb-6">
                        <Switch>
                            <Route  
                                exact
                                path={this.props.match.path}
                                render={() => (
                                    <div>
                                        <p>Elige una lista de suscripciones</p>
                                    </div>
                                )} 
                            />
                            <Route path={this.props.match.path + '/profesores'}>
                                <SubscriptionsList entity="professors"/>
                            </Route>
                            <Route path={this.props.match.path + '/escuelas'}>
                                <SubscriptionsList entity="schools"/>
                            </Route>
                            <Route path={this.props.match.path + '/universidades'}>
                                <SubscriptionsList entity="universities"/>
                            </Route>
                        </Switch>
                    </div>
                </div>
                <RightPanel />
            </div>
        );
    }
}