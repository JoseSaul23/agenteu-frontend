import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class ProfileNavBar extends Component {

    state = {
        section: null
    }

    componentDidMount(){
        const path = this.props.location.pathname.split("/")
        this.setState({ 
            section: path[path.length-1] 
        })
        console.log(this.state)
    }

    componentDidUpdate(prevPros){
        if(prevPros.location.pathname !== this.props.location.pathname){
            const path = this.props.location.pathname.split("/")
            this.setState({ 
                section: path[path.length-1] 
            })
            console.log(this.state)
        }
    }

    _renderNavBar = () => {
        const {subject, url} = this.props
        switch (subject) {
            case "universidades":
                return (
                    <div className="tabs">
                        <ul className="has-text-weight-medium">
                            <li className="pr-3 pl-3 is-hidden-mobile"></li>
                            <li className="pr-3 pl-3 is-hidden-mobile"></li>
                            <li className="pr-3 pl-3 is-hidden-mobile"></li>
                            <li 
                                className={
                                    `pr-3 pl-3 
                                    ${this.state.section !== "escuelas" && this.state.section !== "profesores" 
                                    ? "is-active" 
                                    : ""}`
                                }
                            >
                                <Link to={url+''}>Reseñas</Link>
                            </li>
                            <li 
                                className={`pr-3 pl-3 ${this.state.section === "escuelas" ? "is-active" : ""}`}
                            >
                                <Link to={url+'/escuelas'}>Escuelas</Link>
                            </li>
                            <li 
                                className={`pr-3 pl-3 ${this.state.section === "profesores" ? "is-active" : ""}`}
                            >
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
                            <li 
                                className={`pr-3 pl-3 ${this.state.section !== "profesores" ? "is-active" : ""}`}
                            >
                                <Link to={url+''}>Reseñas</Link>
                            </li>
                            <li 
                                className={`pr-3 pl-3 ${this.state.section === "profesores" ? "is-active" : ""}`}
                            >
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
                            <li 
                                className={`pr-3 pl-3 ${this.state.section === "favoritas" ? "is-active" : ""}`}
                            >
                                <Link to={url+'/favoritas'}>Favoritas</Link>
                            </li>
                            <li 
                                className={`pr-3 pl-3 ${this.state.section === "recomendadas" ? "is-active" : ""}`}
                            >
                                <Link to={url+'/recomendadas'}>Recomendadas</Link>
                            </li>
                        </ul>
                    </div>
                );
            case "subscriptions":
                return (
                    <div className="tabs">
                        <ul className="has-text-weight-medium">
                            <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
                            <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
                            <li 
                                className={`pr-3 pl-3 ${this.state.section === "profesores" ? "is-active" : ""}`}
                            >
                                <Link to={url+'/profesores'}>Profesores</Link>
                            </li>
                            <li 
                                className={`pr-3 pl-3 ${this.state.section === "escuelas" ? "is-active" : ""}`}
                            >
                                <Link to={url+'/escuelas'}>Escuelas</Link>
                            </li>
                            <li 
                                className={`pr-3 pl-3 ${this.state.section === "universidades" ? "is-active" : ""}`}
                            >
                                <Link to={url+'/universidades'}>Universidades</Link>
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