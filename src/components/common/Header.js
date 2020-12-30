import React, {Component} from 'react'
import {Logo} from './Logo'
import {SearchBox} from './SearchBox'
import HeaderLinks from './HeaderLinks'


export class Header extends Component {
  render () {
    return (
      <React.Fragment>
      <nav className="navbar is-hidden-mobile columns is-fixed-top is-vcentered mb-0 pt-2">
        <div className="column is-3 pb-0 pl-6">
          <Logo></Logo>
        </div> 
        <div className="column is-6">
          <SearchBox></SearchBox>
        </div> 
        <div className="column is-3">
          <HeaderLinks />
        </div> 
      </nav>
      {/* MENU MOBIL */}
      <nav className="navbar is-hidden-desktop columns is-multiline is-mobile is-fixed-top is-vcentered mb-0 pt-2">
        <div className="column is-6 pb-0 pl-5">
          <Logo></Logo>
        </div> 
        <div className="column is-6">
          <HeaderLinks></HeaderLinks>
        </div> 
        <div className="column is-12 px-5">
          <SearchBox></SearchBox>
        </div> 
      </nav>
      </React.Fragment>
    );
  }
}
