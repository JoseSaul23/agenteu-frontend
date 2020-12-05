import React, {Component} from 'react'
import {Header} from './components/Header'
import {Menu} from './components/Menu'
import {MasterWrapper} from './components/MasterWrapper'
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <div className="main-content columns">
          <div className="column side is-2 full-h pr-0 is-hidden-mobile">
            <Menu />
          </div>
          <div className="column master-wrapper pt-5">
            <MasterWrapper />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
