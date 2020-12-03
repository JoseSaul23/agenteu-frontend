import React, {Component} from 'react'
import { BsSearch } from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscHome} from 'react-icons/vsc'
import {BsPersonLinesFill, BsBuilding} from 'react-icons/bs'
import logo from './logo.png'
import './App.css';
import 'bulma/css/bulma.css'

class Logo extends Component {
  render () {
    return (
      <img src={logo} alt="logo" width="300" height="80"/>
    );
  }
}

class SearchBox extends Component {
  state = {
    inputQuery: ''
  }

  _handleChange = (e) => {
    this.setState({ inputQuery: e.target.value})
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:8000/api/profesores/`)
      .then(res => res.json())
      .then(results => {
        console.log(results)
      }) 
  }

  render () {
    return (
      <form onSubmit={this._handleSubmit} className="field has-addons">
        <p className="control">
          <span className="select">
            <select>
              <option>Profesores</option>
              <option>Universidades</option>
              <option>Escuelas</option>
            </select>
          </span>
        </p>
        <div className="control is-expanded">
          <input
            className="input"
            onChange={this._handleChange}
            type="text" 
            placeholder="Buscar en agenteuis"/>
        </div>
        <div className="control">
          <button className="button is-warning">
            <BsSearch className="is-size-5"></BsSearch>
          </button>
        </div>
      </form>
    );
  }
}

class HeaderLinks extends Component {
  render () {
    return (
      <ul className="has-text-centered">
        <li className="button is-warning small-text mr-5 ">Registrarse</li>
        <li className="button is-link small-text">Iniciar sesión</li>
      </ul>
    );
  }
}

class Header extends Component {
  render () {
    return (
      // is-vcentered
      <nav className="columns is-vcentered mb-0">
        <div className="column pl-6 mt-4">
          <Logo></Logo>
        </div> 
        <div className="column is-half pl-6">
          <SearchBox></SearchBox>
        </div> 
        <div className="column">
          <HeaderLinks></HeaderLinks>
        </div> 
      </nav>
    );
  }
}

class Menu extends Component {
  render () {
    return (
      <aside className="menu pl-5 pt-0 pr-0">
        <ul className="menu-list">
          <li><a><GiHamburgerMenu className="is-size-4"></GiHamburgerMenu></a></li>
          <li><a><VscHome className="is-size-4 mr-4"></VscHome> Inicio</a></li>
          <li><a><BsBuilding className="is-size-4 mr-4"></BsBuilding> Instituciones</a></li>
          <li><a><BsPersonLinesFill className="is-size-4 mr-4"></BsPersonLinesFill> Profesores</a></li>
        </ul>
      </aside>
    );
  }
}

class MasterWrapper extends Component {
  render () {
    return (
      <section className="">
            <h5 className="subtitle">
              Ultimos profesores agregados
            </h5>          
        {/* <LastProfessorsAdded></LastProfessorsAdded> */}
      </section>
    );
  }
}

function App() {
  return (
    <div>
      <Header></Header>
      <div className="main-content columns is-fullheight">
        <div className="column is-fullheight is-2 p-0">
          <Menu></Menu>
        </div>
        <div className="column hero master-wrapper is-fullheight">
          <MasterWrapper></MasterWrapper>
        </div>
      </div>
    </div>
  );
}

export default App;
