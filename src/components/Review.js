import React, {Component} from 'react'
import {AiOutlineLike} from 'react-icons/ai'
import {BsBookmark, BsFlagFill} from 'react-icons/bs'
import {RiShareForwardFill} from 'react-icons/ri'

export class Review extends Component {
    render () {
        return (
            <div className="columns is-multiline mb-5">
                <div className="column is-full has-text-weight-medium small-label p-0 pl-1 closer-letters">
                    <p>
                        <span className="black-title">usuarioX</span> - 28 sep 2020
                    </p>
                    <p>
                        sobre Universidad Industrial de Santander
                    </p>
                </div>
                <div className="column">
                    <div className="columns is-mobile">
                        <div className="column is-four-fifths review-main-box pt-2 pr-2 pl-2 pb-0"> 
                            <div class="review-text"> 
                                <p>
                                    texto texto texto texto texto texto tetexto texto texto texto texto texto texto texto texto texto texto
                                </p>
                            </div>
                            <div className="columns is-mobile pt-2"> 
                                <div className="column is-8-desktop is-half-mobile icon">
                                    <span className="icon">
                                        <AiOutlineLike />
                                    </span>
                                    <span className="icon">
                                        
                                        26
                                        <span> </span>
                                    </span>
                                </div>
                                <div className="column has-text-centered">
                                    <BsBookmark className="is-size-5" />  
                                </div>
                                <div className="column has-text-centered">
                                    <RiShareForwardFill className="is-size-5" />
                                </div >
                                <div className="column has-text-centered">
                                    <BsFlagFill  className="is-size-5" />
                                </div >
                            </div>
                        </div>
                        <div className="column has-text-centered has-text-weight-medium pt-0"> 
                            <div className="review-main-box mb-4 close-letters"> 
                                <p>calificación</p>
                                <p className="is-size-4">4.6</p> 
                            </div>
                            <div className="review-main-box close-letters"> 
                                <p>dificultad</p>
                                <p className="is-size-4">72%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}