import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscHome} from 'react-icons/vsc'
import {BsPersonLinesFill, BsBuilding} from 'react-icons/bs'
import {BiNews} from 'react-icons/bi'
import {MdLibraryBooks} from 'react-icons/md' 

export class Menu extends Component {

    state = {
        section: null
    }

    componentDidMount(){
        const path = this.props.location.pathname.split("/")
        this.setState({ 
            section: path[path.length-1] 
        })
    }

    componentDidUpdate(prevPros){
        if(prevPros.location.pathname !== this.props.location.pathname){
            const path = this.props.location.pathname.split("/")
            this.setState({ 
                section: path[path.length-1] 
            })
        }
    }

    render () {
        return (
        <aside className="menu-wrapper menu navbar-menu pl-5 pr-0">
            <ul className="menu-list">
                <li>
                    <Link to="/">
                        <GiHamburgerMenu className="is-size-4" />
                    </Link>
                </li>
                <li className="has-text-weight-medium">
                    <Link 
                        to='/'
                        className={this.state.section === "" ? "menu-active" : ""}
                    >
                        <div className="centered-label">
                            <VscHome className="is-size-4 mr-4"></VscHome>
                            <span>Inicio</span>
                        </div>
                    </Link>
                </li>
                <li className="has-text-weight-medium">
                    <Link 
                        to='/feed'
                        className={this.state.section === "feed" ? "menu-active" : ""}
                    >
                        <div className="centered-label">
                            <BiNews className="is-size-4 mr-4"></BiNews>
                            <span>Lo último</span>
                        </div>
                    </Link>
                </li>
                <li className="has-text-weight-medium">
                    <Link 
                        to='/biblioteca'
                        className={
                            this.state.section === "favoritas" || 
                            this.state.section === "recomendadas" ||
                            this.state.section === "biblioteca" 
                            ? "menu-active" 
                            : ""
                        }
                    >
                        <div className="centered-label">
                            <MdLibraryBooks className="is-size-4 mr-4"></MdLibraryBooks>
                            <span>Biblioteca</span>
                        </div>
                    </Link>
                </li>
                <li className="has-text-weight-medium">
                    <Link 
                        to="/instituciones"
                        className={this.state.section === "instituciones" ? "menu-active" : ""}
                    >
                        <div className="centered-label">
                            <BsBuilding className="is-size-4 mr-4"></BsBuilding>
                            <span>Instituciones</span>
                        </div>
                    </Link>
                </li>
                <li className="has-text-weight-medium">
                    <Link 
                        to='/profesorado'
                        className={this.state.section === "profesorado" ? "menu-active" : ""}
                    >
                        <div className="centered-label">
                            <BsPersonLinesFill className="is-size-4 mr-4"></BsPersonLinesFill>
                            <span>Profesores</span>
                        </div>
                    </Link>
                </li>
                {/* <li className="ml-1 foot mb-6">
                    Terminos {"&"} condiciones
                </li>
                <li className="ml-1 foot mb-5">
                    Politica de privacidad
                </li>
                <li className="ml-1 foot">
                    Guia del sitio
                </li> */}
            </ul>
        </aside>
        );
    }
}