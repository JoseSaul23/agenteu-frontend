import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class ProfileNavBar extends Component {
    _renderNavBar = () => {
        const {subject, url} = this.props
        switch (subject) {
            case "universidades":
                return (
                    <div className="tabs">
                        <ul className="has-text-weight-medium">
                            <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
                            <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
                            <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
                            <li className="is-active pr-3 pl-3">
                                <Link to={url+''}>Reseñas</Link>
                            </li>
                            <li className="pr-3 pl-3">
                                <Link to={url+'/escuelas'}>Escuelas</Link>
                            </li>
                            <li className="pr-3 pl-3">
                                <Link to={url+'/profesores'}>Profesores</Link>
                            </li>
                        </ul>
                    </div>
                );
            case "escuelas": 
                return (
                    <div className="tabs">
                        <ul className="has-text-weight-medium">
                            <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
                            <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
                            <li className="is-active pr-3 pl-3">
                                <Link to={url+''}>Reseñas</Link>
                            </li>
                            <li className="pr-3 pl-3">
                                <Link to={url+'/profesores'}>Profesores</Link>
                            </li>
                        </ul>
                    </div>
                );
            case "profesores":
                return (
                    <div className="tabs">
                        <ul className="has-text-weight-medium">
                        </ul>
                    </div>
                );

            case "library":
                return (
                    <div className="tabs">
                        <ul className="has-text-weight-medium">
                            <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
                            <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
                            <li className="is-active pr-3 pl-3">
                                <Link to={url+'/favoritas'}>Favoritas</Link>
                            </li>
                            <li className="pr-3 pl-3">
                                <Link to={url+'/recomendadas'}>Recomendadas</Link>
                            </li>
                        </ul>
                    </div>
                );
            default: return <div>NavBar (Falta prop subject)</div>
        }
    }

    render () {
        return (
            <React.Fragment>
                {this._renderNavBar()}
            </React.Fragment>
        );
    }
}