import React, {Component} from 'react'
import { BsSearch } from 'react-icons/bs';
import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'

export class SearchBox extends Component {
    state = {
        inputQuery: '',
        entity: 'profesores'
    }

    _handleChange = (e) => {
        this.setState({ inputQuery: e.target.value })
    }

    _handleSelect = (e) => {
        this.setState({ entity: e.target.value })
    }

    render () {
        return (
        <form className="field has-addons">
            <p className="control">
            <span className="select">
                <select value={this.state.entity} onChange={this._handleSelect}>
                    <option value="profesores">Profesores</option>
                    <option value="universidades">Universidades</option>
                    <option value="escuelas">Escuelas</option>
                </select>
            </span>
            </p>
            <div className="control is-expanded">
            <input
                className="input"
                onChange={this._handleChange}
                type="text" 
                placeholder={"Buscar reseñas de " + this.state.entity +" en agenteUIS"}/>
            </div>
            <div className="control">
                <Link to={"/busqueda/" + this.state.entity + "/" + this.state.inputQuery}>
                    <button className="button is-warning">
                        <BsSearch className="is-size-5"></BsSearch>
                    </button>
                </Link>
            </div>
        </form>
        );
    }
}