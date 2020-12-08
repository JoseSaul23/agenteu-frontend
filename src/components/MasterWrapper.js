import React, {Component} from 'react'
import {Switch, Route } from 'react-router-dom'
import {Home} from './Home'
import {UserFeed} from './UserFeed'
import {UserLibrary} from './UserLibrary'
import {UserReviews} from './UserReviews'
import {InstitutionsInMenuList} from './InstitutionsList'
import {ProfessorsInMenuList} from './ProfessorsInMenuList'
import {Register} from './Register'
import {Login} from './Login'
import {SearchResults} from './SearchResults'
import {UniversityProfile} from './UniversityProfile'
import {SchoolProfile} from './SchoolProfile'
import {ProfessorProfile} from './ProfessorProfile'
import {CreateReview} from './CreateReview'
import {NotificationsList} from './NotificationsList'
import {UserAccount} from './UserAccount'

export class MasterWrapper extends Component {
    render () {
      return (
        <Switch> 
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/feed" component={UserFeed}></Route>
          <Route exact path="/biblioteca" component={UserLibrary}></Route>
          <Route exact path="/publicaciones" component={UserReviews}></Route>
          <Route exact path="/instituciones" component={InstitutionsInMenuList}></Route>
          <Route exact path="/profesores" render={ () => <ProfessorsInMenuList />}></Route>
          <Route exact path="/registro" component={Register}></Route>
          <Route exact path="/iniciar-sesion" component={Login}></Route>
          <Route exact path="/busqueda" component={SearchResults}></Route>
          <Route exact path="/universidades/:id" component={UniversityProfile}></Route>
          <Route exact path="/escuelas/:id" component={SchoolProfile}></Route>
          <Route exact path="/profesores/:id" component={ProfessorProfile}></Route>
          <Route exact path="/publicar/:id" component={CreateReview}></Route>
          <Route exact path="/notificaciones" component={NotificationsList}></Route>
          <Route exact path="/cuenta" component={UserAccount}></Route>
        </Switch>
      );
    }
  }