import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {VscHome} from 'react-icons/vsc'
import {BsPersonLinesFill, BsBuilding} from 'react-icons/bs'
import {BiNews} from 'react-icons/bi'
import {MdLibraryBooks} from 'react-icons/md' 

export class MenuMobile extends Component {

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
            <nav className="navbar is-fixed-bottom columns is-mobile menu-mobile">
                <div className="column">
                    <Link 
                        to='/'
                        className={this.state.section === "" ? "menu-active" : ""}
                    >
                        <div className="centered-label icon mx-3">
                            <VscHome size={24}/>
                        </div>
                    </Link> 
                </div>
                <div className="column">
                    <Link 
                        to='/feed'
                        className={this.state.section === "feed" ? "menu-active" : ""}
                    >
                        <div className="centered-label icon mx-3">
                            <BiNews size={24} />
                        </div>
                    </Link>
                </div>
                <div className="column">
                    <Link 
                        to='/biblioteca'
                        className={this.state.section === "favoritas" || this.state.section === "recomendadas" || this.state.section === "biblioteca" ? "menu-active" : ""}
                    >
                        <div className="centered-label icon mx-3">
                            <MdLibraryBooks size={24} />
                        </div>
                    </Link>
                </div>
                <div className="column">
                    <Link 
                        to="/instituciones"
                        className={this.state.section === "instituciones" ? "menu-active" : ""}
                    >
                        <div className="centered-label icon mx-3">
                            <BsBuilding size={24} />
                        </div>
                    </Link>
                </div>
                <div className="column">
                    <Link 
                        to='/profesorado'
                        className={this.state.section === "profesorado" ? "menu-active" : ""}
                    >
                        <div className="centered-label icon mx-3">
                            <BsPersonLinesFill size={24} />
                        </div>
                    </Link> 
                </div>
            </nav>     
        );
    }
}