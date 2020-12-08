import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscHome} from 'react-icons/vsc'
import {BsPersonLinesFill, BsBuilding} from 'react-icons/bs'
import {BiNews} from 'react-icons/bi'
import {MdLibraryBooks} from 'react-icons/md' 

export class Menu extends Component {
    render () {
        return (
        <aside className="menu-wrapper menu navbar-menu pl-5 pr-0">
            <ul className="menu-list">
                <li><Link><GiHamburgerMenu className="is-size-4"></GiHamburgerMenu></Link></li>
                <li className="has-text-weight-medium">
                    <Link to='/'>
                        <VscHome className="is-size-4 mr-4"></VscHome> Inicio
                    </Link>
                </li>
                <li className="has-text-weight-medium">
                    <Link to='/feed'>
                        <BiNews className="is-size-4 mr-4"></BiNews> Lo último
                    </Link>
                </li>
                <li className="has-text-weight-medium">
                    <Link to='/biblioteca'>
                        <MdLibraryBooks className="is-size-4 mr-4"></MdLibraryBooks> Biblioteca
                    </Link>
                </li>
                <li className="has-text-weight-medium">
                    <Link to="/instituciones">
                        <BsBuilding className="is-size-4 mr-4"></BsBuilding> Instituciones
                    </Link>
                </li>
                <li className="has-text-weight-medium">
                    <Link to='/profesores'>
                        <BsPersonLinesFill className="is-size-4 mr-4"></BsPersonLinesFill> Profesores
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