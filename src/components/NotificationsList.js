import React, {Component} from 'react'
import {SideList} from './SideList'
import {FaTrashAlt} from 'react-icons/fa'
import {AiOutlineCheck} from 'react-icons/ai'

export class NotificationsList extends Component {
    render () {
        return (
            <div className="columns">
                <div className="column is-two-thirds pr-0 mt-4">
                    <div className="columns is-multiline is-centered pl-4">
                        <div className="column is-four-fifths mt-2">
                            <div className="side round-box pb-3 black-title">
                                <div className="p-4 pt-1 list-border-bottom has-text-weight-bold">
                                    Notificaciones
                                </div>
                                <div className="pt-2 pb-2 pl-4 pr-4 list-border-bottom">
                                    <div className="columns">
                                        <div className="column is-10">
                                            Nueva reseña sobre: Maria Alejandra Rodriguez Ospina 
                                        </div>
                                        <div className="column">
                                            <span className="has-text-warning-dark">
                                                <AiOutlineCheck />
                                            </span>
                                        </div>
                                        <div className="column">
                                            <span className="has-text-danger-dark">
                                                <FaTrashAlt />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2 pb-2 pl-4 pr-4 list-border-bottom">
                                    <div className="columns">
                                        <div className="column is-10">
                                            Nueva reseña sobre: Maria Alejandra Rodriguez Ospina 
                                        </div>
                                        <div className="column">
                                            <span className="has-text-warning-dark">
                                                <AiOutlineCheck />
                                            </span>
                                        </div>
                                        <div className="column">
                                            <span className="has-text-danger-dark">
                                                <FaTrashAlt />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right-side-panel is-hidden-mobile full-h">
                    <SideList />
                </div>
            </div>
        );
    }
}