import React, {Component} from 'react'
import {Logo} from './Logo'
import {SearchBox} from './SearchBox'
import HeaderLinks from './HeaderLinks'

export class Header extends Component {

    render () {
      return (
        <nav className="navbar columns is-fixed-top is-vcentered mb-0 pt-2">
          <div className="column pl-6 pb-0">
            <Logo></Logo>
          </div> 
          <div className="column is-half pl-6">
            {/* onResults se hace igual al metodo que recibe los resultados
            onResults = _takeResults (señalan al mismo metodo)*/}
            <SearchBox></SearchBox>
          </div> 
          <div className="column">
            <HeaderLinks></HeaderLinks>
          </div> 
        </nav>
      );
    }
  }