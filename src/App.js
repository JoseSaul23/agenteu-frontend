import React, {Component} from 'react'
import {Header} from './components/common/Header'
import {Menu} from './components/common/Menu'
import {MenuMobile} from './components/common/MenuMobile'
import {MasterWrapper} from './components/common/MasterWrapper'
import Register from './components/accout/Register'
import Login from './components/accout/Login'
import ResetPassword from './components/accout/ResetPassword'
import ResetPasswordConfirmation from './components/accout/ResetPasswordConfirmation'
import {Switch, Route } from 'react-router-dom'
import './App.css';
import 'my-bulma/css/mystyles.css'
// import 'bulma/css/bulma.css'
// import logoicono from './logo-icono.png' 
import store from './store'
import {getUser} from '../src/components/actions/authActions'
import {connect} from 'react-redux'


class App extends Component {

  componentDidMount() {
    store.dispatch(getUser())
  }

  render () {
    return (  
      // hacer con variable comun y corriete
      // this.props.isLoading 
      // ? <div className="columns is-vcentered full-h">
      //     <div className="column is-half is-offset-one-quarter has-text-centered">
      //       <img src={logoicono} className="app-logo" alt="logoicono" width="100" height="100"/>
      //     </div>
      //   </div> 
      // :
      <div className="App pb-6"> 
        <Header />
        <Switch>
            <Route exact path="/iniciar-sesion" component={Login} />
            <Route exact path="/registro" component={Register} />
            <Route exact path="/recuperar-cuenta" component={ResetPassword} />
            <Route exact path="/recuperar-cuenta-confirmacion" component={ResetPasswordConfirmation} />
            <Route
              exact  
              path="" 
              render={({ location }) => (
                  location.state && location.state.is404
                    ? <div>404!!!</div>
                    : 
                    <div className="main-content columns">
                      <div className="column side small-column full-h pr-0 is-hidden-mobile is-hidden-tablet-only">
                        <Menu location={location}/>
                      </div>
                      <div className="is-hidden-desktop">
                        <MenuMobile location={location}/>
                      </div>
                      <div className="column master-wrapper">
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

const mapStateToProps = state => ({
  isLoading : state.auth.isLoading,
});

export default connect(
  mapStateToProps, {getUser}
)(App);