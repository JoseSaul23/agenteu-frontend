import React, {Component} from 'react'
import {Switch, Route } from 'react-router-dom'
import {Home} from './Home'
import {UserFeed} from '../user/UserFeed'
import {UserLibrary} from '../user/UserLibrary'
import {UserReviews} from '../user/UserReviews'
import {InstitutionsInMenuList} from '../university/InstitutionsList'
import {ProfessorsInMenuList} from '../professor/ProfessorsInMenuList'
import {SearchResults} from './SearchResults'
import {Profile} from './Profile'
import {UniversityDetails} from '../university/UniversityDetails'
import {SchoolDetails} from '../school/SchoolDetails'
import {ProfessorDetails} from '../professor/ProfessorDetails'
import {CreateReview} from '../review/CreateReview'
import {NotificationsList} from '../user/NotificationsList'
import {UserAccount} from '../user/UserAccount'
import {RedirectAs404} from '../common/RedirectAs404'

export class MasterWrapper extends Component {
    render () {
      return (
        <Switch> 
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/instituciones" component={InstitutionsInMenuList}></Route>
          <Route exact path="/profesores" component={ProfessorsInMenuList}></Route>
          <Route
            exact 
            path="/busqueda/:entity/:q/"
            render={ (props) => (
              <SearchResults {...props}/>
            )} 
          /> 
          <Route path="/publicar/:id" component={CreateReview}></Route>
          <Route path="/feed" component={UserFeed}></Route>
          <Route path="/biblioteca" component={UserLibrary}></Route>
          <Route path="/mis-publicaciones" component={UserReviews}></Route>
          <Route 
            path="/universidades/:id" 
            render={(props) => (
              <Profile {...props} entity="university">
                <UniversityDetails {...props}/>
              </Profile>
            )} 
          />
          <Route 
            path="/escuelas/:id" 
            //Route inyecta el componente con props (match y otros)
            render={(props) => (
              <Profile {...props} entity="school">
                <SchoolDetails {...props}/>
              </Profile>
            )} 
          />
          <Route  
            path="/profesores/:id" 
            render={(props) => (
              <Profile {...props} entity="professor">
                <ProfessorDetails {...props}/>
              </Profile>
            )} 
          />
          <Route path="/notificaciones" component={NotificationsList}></Route>
          <Route path="/cuenta" component={UserAccount}></Route>
          <Route component={RedirectAs404}/>
        </Switch> 
      );
    }
  }