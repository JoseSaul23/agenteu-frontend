import React, {Component} from 'react'

export class University extends Component {
    render () {
        return (
        <div className="column is-three-fifths mb-3">
            <div className="columns is-7">
                <div className="column is-half">
                    {/* <img src={logo} alt="logo"/> */}
                </div>
                <div className="column pl-2 pr-4 pl-4"> 
                    <div className="has-text-weight-medium pb-3">Universidad Industrial de Santander</div>
                    <div className="pb-3 has-text-weight-medium">23 reseñas</div>
                    <div className="columns is-vcentered is-mobile">
                        <div className="column has-text-centered">
                            <p className="institution-labels">calificación</p>
                            <p className="has-text-success has-text-weight-medium">5</p>
                        </div>
                        <div className="column has-text-centered">
                            <p className="institution-labels">dificultad</p>
                            <p className="has-text-success has-text-weight-medium">60%</p>
                        </div>
                        <div className="column">
                            <button className="button is-small is-link">
                                <span className="medium-text has-text-weight-medium">Ver reseñas</span>
                            </button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}