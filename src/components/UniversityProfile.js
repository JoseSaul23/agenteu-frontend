import React, {Component} from 'react'
import {UniversityDetails} from './UniversityDetails'
import {ProfileNavBar} from './ProfileNavBar'
import {ReviewsList} from './ReviewsList'
import {SchoolsList} from './SchoolsList'
import {ProfessorsList} from './ProfessorsList'

export class UniversityProfile extends Component {
    render () {
        return (
            <div className="columns mt-5 pl-2 is-multiline">
                <div className="column is-one-third is-offset-1">
                    <UniversityDetails /> 
                </div>
                <div className="column is-12">
                    <ProfileNavBar />
                </div>
                {/* <div className="column is-three-fifths is-offset-1">
                    <ReviewsList />
                    <SchoolsList />
                </div> */}
                <div className="column is-one-quarter is-offset-1">
                    <ProfessorsList />
                </div>
                {/*//render university detail, recibe la id, busca la U y manda datos como props. */}
            </div>
            
            // <Switch>
            //     <Route exact path="universidades/1" component="ReviewsList"></Route> /el sorting se da dentro de las listas
            //     <Route exact path="universidades/1/escuelas" component="SchoolsList"></Route>
            //     <Route exact path="universidades/1/profesores" component="ProfessorsList"></Route>
            // </Switch> 
            // <ReviewsList entity="university">
            // class ReviewsList
            //  
            //  
            //
            //
        );
    }
}