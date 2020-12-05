import React, {Component} from 'react'
import {Switch, Route } from 'react-router-dom'
import {Home} from './Home'
import {InstitutionsInMenuList} from './InstitutionsList'
import {ProfessorsInMenuList} from './ProfessorsList'
import {Register} from './Register'
import {Login} from './Login'

export class MasterWrapper extends Component {
    render () {
      return (
        <Switch> 
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/instituciones" component={InstitutionsInMenuList}></Route>
          <Route exact path="/profesores" render={ () => <ProfessorsInMenuList />}></Route>
          <Route exact path="/registro" component={Register}></Route>
          <Route exact path="/iniciar-sesion" component={Login}></Route>
        </Switch>
      );
    }
  }