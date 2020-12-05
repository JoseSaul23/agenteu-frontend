import React, {Component} from 'react'
import { BsSearch } from 'react-icons/bs';

export class SearchBox extends Component {
    state = {
        inputQuery: ''
    }

    _handleChange = (e) => {
        this.setState({ inputQuery: e.target.value})
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const {inputQuery} = this.state
        fetch(`http://localhost:8000/api/profesores/?search=`+inputQuery)
        .then(res => res.json())
        .then(results => {
            this.props.onResults(results)
        }) 
    }

    render () {
        return (
        <form className="field has-addons">
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