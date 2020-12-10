import React, {Component} from 'react'
import {AiOutlineLike} from 'react-icons/ai'
import {BsBookmark, BsFlagFill} from 'react-icons/bs'
import {RiShareForwardFill} from 'react-icons/ri'

export class Review extends Component {
    render () {
        const {text, rating, difficulty, date, user, entity, recomendations_count} = this.props

        return (
            <div className="columns is-multiline mb-5">
                <div className="column is-full has-text-weight-medium small-label p-0 pl-1 closer-letters">
                    <p>
                        <span className="black-title">{user}</span> - {date}
                    </p>
                    <p>
                        sobre {entity}
                    </p>
                </div>
                <div className="column">
                    <div className="columns is-mobile">
                        <div className="column is-four-fifths review-main-box pt-2 pr-2 pl-2 pb-0"> 
                            <div className="review-text"> 
                                <p>
                                    {text}
                                </p>
                            </div>
                            <div className="columns is-mobile pt-2"> 
                                <div className="column is-8-desktop is-half-mobile icon">
                                    <AiOutlineLike className="is-size-5" />
                                    {recomendations_count}    
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
                                <p className="is-size-4">{rating}</p> 
                            </div>
                            <div className="review-main-box close-letters"> 
                                <p>dificultad</p>
                                <p className="is-size-4">{difficulty}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}