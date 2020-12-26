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
            <section class="hero is-large">
                <div class="hero-body pt-6">
                    <div class="container has-text-centered">
                        <FaSearch size={80} className="mb-4"/>
                        <h1 class="title">
                            La página que busca no existe.
                        </h1>
                        <h2 class="subtitle">
                            Intente hacer otra busqueda.
                        </h2>
                    </div>
                </div>
            </section>
        );
    }
} 

export default connect(null, {clearErrors})(Page404)
