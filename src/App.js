import React, {Component} from 'react'
import {Header} from './components/common/Header'
import {Menu} from './components/common/Menu'
import {MenuMobile} from './components/common/MenuMobile'
import {MasterWrapper} from './components/common/MasterWrapper'
import Register from './components/accout/Register'
import Login from './components/accout/Login'
import Page404 from './components/common/Page404'
import ResetPassword from './components/accout/ResetPassword'
import ResetPasswordConfirmation from './components/accout/ResetPasswordConfirmation'
import {Switch, Route } from 'react-router-dom'
import './App.css';
import 'mybulma/css/mystyles.css'
import logoicono from './logo-icono.png'
// import Alert from '@material-ui/lab/Alert';
// import Snackbar from '@material-ui/core/Snackbar';
import {getUser} from '../src/components/actions/authActions'
import {clearMessages} from '../src/components/actions/messageActions'
import {connect} from 'react-redux'


class App extends Component {

  componentDidMount() {
    this.props.getUser()
  }

  // _handleAlertClose = () => {
  //   this.props.clearMessages()
  // }

  render () {
    const loading = (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <img src={logoicono} className="app-logo" alt="logoicono" width="100" height="100"/>
          </div>
        </div>
      </section>
    );
    const content = (
      <div className="App pb-6">
        <Header />
        <Switch>
            <Route exact path="/iniciar-sesion" component={Login} />
            <Route exact path="/registro" component={Register} />
            <Route exact path="/recuperar-cuenta" component={ResetPassword} />
            <Route exact path="/password/reset/confirm/:uid/:token" component={ResetPasswordConfirmation} />
            <Route
              exact  
              path="" 
              render={({ location }) => (
                  location.state && location.state.is404
                    ? <Page404 />
                    : 
                    <div className="main-content columns">
                      <div className="column side small-column full-h pr-0 is-hidden-mobile is-hidden-tablet-only">
                        <Menu location={location}/>
                      </div>
                      <div className="is-hidden-desktop">
                        <MenuMobile location={location}/>
                      </div>
                      <div className="column master-wrapper pt-5">
                        <MasterWrapper />
                      </div>
                    </div>
              )} 
            />
        </Switch>
        {/* { 
        <Snackbar 
          open={this.props.message !== '' ? true : false}
          autoHideDuration={2000}
          onClose={this._handleAlertClose}
        >
          <Alert severity="success">
            {this.props.message}Mensa
          </Alert>
        </Snackbar>
        } */}
      </div>
    )
    return (  
      <React.Fragment>
        {this.props.isLoading ? loading : content}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLoading : state.auth.isLoading,
  message: state.messages.message
});

export default connect(
  mapStateToProps, {getUser, clearMessages}
)(App);