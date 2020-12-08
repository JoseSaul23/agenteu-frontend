import React, {Component} from 'react'
import {SchoolDetails} from './SchoolDetails'
import {ProfileNavBar} from './ProfileNavBar'
import {ReviewsList} from './ReviewsList'
import {ProfessorsList} from './ProfessorsList'
import {SideList} from './SideList'

export class SchoolProfile extends Component {
    render () {
        return (
            <div className="columns">
                <div className="column is-two-thirds pr-0">
                    <div className="columns mt-5 pl-2 is-multiline">
                        <div className="column is-three-fifths is-offset-1">
                            <SchoolDetails /> 
                        </div>
                        <div className="column is-12">
                            <ProfileNavBar />
                        </div>
                        <div className="column is-four-fifths is-offset-1 mt-2">
                            <ReviewsList />
                            {/* <SchoolsList /> */}
                        </div>
                        {/* <div className="column is-two-fifths is-offset-1">
                            <ProfessorsList />
                        </div> */}
                        {/*//render university detail, recibe la id, busca la U y manda datos como props. */}
                    </div>
                </div>
                <div className="column right-side-panel is-hidden-mobile">
                    <SideList />
                </div>
            </div>
            // <Switch>
            //     <Route exact path="universidades/1" component="ReviewsList"></Route> /el sorting se da dentro de las listas
            //     <Route exact path="universidades/1/profesores" component="ProfessorsList"></Route>
            // </Switch> 
        );
    }
}