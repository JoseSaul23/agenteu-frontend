import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class ProfileNavBar extends Component {
    render () {
        return (
            //para universidades
            // <div className="tabs">
            //     <ul className="has-text-weight-medium">
            //         <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
            //         <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
            //         <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
            //         <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
            //         <li className="is-active pr-3 pl-3">
            //             <Link>Reseñas</Link>
            //         </li>
            //         <li className="pr-3 pl-3">
            //             <Link>Escuelas</Link>
            //         </li>
            //         <li className="pr-3 pl-3">
            //             <Link>Profesores</Link>
            //         </li>
            //     </ul>
            // </div>
            //para escuelas
            // <div className="tabs">
            //     <ul className="has-text-weight-medium">
            //         <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
            //         <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
            //         <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
            //         <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
            //         <li className="is-active pr-3 pl-3">
            //             <Link>Reseñas</Link>
            //         </li>
            //         <li className="pr-3 pl-3">
            //             <Link>Profesores</Link>
            //         </li>
            //     </ul>
            // </div>
            //Para profesores
            // <div className="tabs">
            //     <ul className="has-text-weight-medium">
            //     </ul>
            // </div>
            //Para la libreria
            <div className="tabs">
                <ul className="has-text-weight-medium">
                    <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
                    <li className="is-active pr-3 pl-3 is-hidden-mobile"></li>
                    <li className="is-active pr-3 pl-3">
                        <Link>Favoritas</Link>
                    </li>
                    <li className="pr-3 pl-3">
                        <Link>Recomendadas</Link>
                    </li>
                </ul>
            </div>
        );
    }
}