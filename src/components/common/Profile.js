import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {ProfileNavBar} from './ProfileNavBar'
import ReviewsList from '../review/ReviewsList'
import SchoolsList from '../school/SchoolsList'
import ProfessorsList from '../professor/ProfessorsList'
import {RedirectAs404} from './RedirectAs404'
import {RightPanel} from './RightPanel'

export class Profile extends Component {

    state = {
        entity:""
    }

    render () {
        const {entity} = this.props
        const {id} = this.props.match.params
        return (
            <div className="columns">
                <div className="column is-two-thirds pr-0">
                    <div className="columns mt-5 pl-2 is-multiline">
                        <div className="column is-four-fifths is-offset-1">
                            {/* DETALLES */}
                            {this.props.children}
                        </div>
                        <div className="column is-12">
                            {/* BARRA DE NAVEGACION */}
                            <ProfileNavBar subject={entity} url={this.props.match.url}/>
                        </div>
                        {/* LISTAS */}
                        <Switch>
                            <Route  
                                exact
                                path={this.props.match.path}
                                render={(props) => (
                                    <div className="column is-four-fifths is-offset-1 mt-2">
                                        <ReviewsList {...props} entity={entity}/>
                                    </div>
                                )} 
                            />
                            {entity === "universidades" || entity ==="escuelas"
                                ?   <Route 
                                        path={this.props.match.path + "/profesores"}
                                        render={(props) => (
                                            <div className="column is-two-fifths is-offset-1">
                                                <ProfessorsList {...props} entity={entity}/>
                                            </div>
                                        )} 
                                    />
                                :   <Route component={RedirectAs404}/>
                                }
                            {entity === "universidades" 
                                ?   <Route 
                                        path={this.props.match.path + "/escuelas"}
                                        render={(props) => (
                                            <div className="column is-four-fifths is-offset-1 mt-2">
                                                <SchoolsList {...props} />
                                            </div>
                                        )} 
                                    />
                                :   <Route component={RedirectAs404}/>
                            }
                            <Route component={RedirectAs404}/>
                        </Switch>
                    </div>
                </div>
                {/* PANEL DERECHO */}
                <RightPanel sideList={entity} id={id}/>
            </div>
        );
    }
}