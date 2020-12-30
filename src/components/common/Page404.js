import React, {Component} from 'react'
import {connect} from 'react-redux'
import {clearErrors} from '../actions/errorActions'
import {FaSearch} from 'react-icons/fa'

class Page404 extends Component {

    componentWillUnmount() {
        this.props.clearErrors()
    }

    render () {
        return (
            <section className="hero is-large">
                <div className="hero-body pt-6">
                    <div className="container has-text-centered">
                        <FaSearch size={80} className="mb-4"/>
                        <h1 className="title">
                            La página que busca no existe.
                        </h1>
                        <h2 className="subtitle">
                            Intente hacer otra busqueda.
                        </h2>
                    </div>
                </div>
            </section>
        );
    }
} 

export default connect(null, {clearErrors})(Page404)
