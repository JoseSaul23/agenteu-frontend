import React, {Component} from 'react'
import {Header} from './components/common/Header'
import {Menu} from './components/common/Menu'
import {MasterWrapper} from './components/common/MasterWrapper'
import {Register} from './components/accout/Register'
import {Login} from './components/accout/Login'
import {Switch, Route } from 'react-router-dom'
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <Switch>
            <Route path="/iniciar-sesion" component={Login}></Route>
            <Route path="/registro" component={Register}></Route>
            <Route
            exact  
            path="" 
            render={({ location }) => (
                location.state && location.state.is404
                  ? <div>404!!!</div>
                  : 
                  <div className="main-content columns">
                    <div className="column side is-2 full-h pr-0 is-hidden-mobile">
                      <Menu />
                    </div>
                    <div className="column master-wrapper pt-5 pr-0">
                      <MasterWrapper />
                    </div>
                  </div>
            )} 
          />
        </Switch>
      </div>
    );
  }
}

export default App;
