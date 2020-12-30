import React, {Component} from 'react'
import Notification from './Notification'
import RightPanel from '../common/RightPanel'
import {connect} from 'react-redux'
import {getNotifications, clearNotifications} from '../actions/notificationsActions'
import PropTypes from 'prop-types'

export class NotificationsList extends Component {

    static propTypes = {
        notifications: PropTypes.array.isRequired,
        getNotifications: PropTypes.func.isRequired,
        clearNotifications: PropTypes.func.isRequired
    }

    componentDidMount() {
        // Traer notificaciones
        this.props.getNotifications()
    }

    componentWillUnmount() {
        // Limpiar reseñas cargadas
        this.props.clearNotifications()
    }

    _renderNotifications = () => {
        if (this.props.notifications.length === 0) {
            return (
                <div className="m-2">No hay mensajes</div>
            );
        }
        else {
            return this.props.notifications.map( notification => {
                return (
                    <Notification 
                        key={notification.id}
                        id={notification.id} 
                        message={notification.message}
                        check={notification.check}
                        date={notification.date}
                    />
                  );
            }   )
        } 
    }

    render () {
        return (
            <div className="columns">
                <div className="column is-8-desktop mt-4">
                    <div className="columns is-multiline is-mobile is-centered">
                        <div className="column is-four-fifths mt-2">
                            <div className="side round-box pb-3 black-title">
                                <div className="p-4 pt-1 list-border-bottom has-text-weight-bold">
                                    Notificaciones
                                </div>
                                {this.props.areLoading ?
                                    <div className="columns mt-6">
                                        <div className="column has-text-centered">
                                            <button className="button is-link is-loading">Loading</button>
                                        </div>
                                    </div> :
                                    this._renderNotifications()
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <RightPanel />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    notifications : state.notification.notifications,
    areLoading: state.notification.areLoading
});

export default connect(mapStateToProps, {getNotifications, clearNotifications})(NotificationsList);