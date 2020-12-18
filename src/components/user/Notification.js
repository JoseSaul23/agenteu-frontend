import React, {Component} from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import {AiOutlineCheck} from 'react-icons/ai'
import {GoPrimitiveDot} from 'react-icons/go'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {connect} from 'react-redux'
import {checkNotification, deleteNotification} from '../actions/notificationsActions'
import PropTypes from 'prop-types'

export class Notification extends Component {

    static propTypes = {
        deleteNotification: PropTypes.func.isRequired,
        checkNotification: PropTypes.func.isRequired,
    }

    _handleDelete = () => {
        this.props.deleteNotification(this.props.id)
    }

    _handleCheck = () => {
        this.props.checkNotification(this.props.id)
    }

    render() {

        const {id, message, check, date} = this.props

        return (
            <div className="pt-2 pb-2 pl-4 pr-4 list-border-bottom">
                <div className="columns">
                    <div className="column is-10">
                        {   
                            !check ?
                            <GoPrimitiveDot className="has-text-link"/> :
                            ""
                        }
                        {message} 
                    </div>
                    <div className="column">
                        <span className="has-text-warning-dark">
                            {
                                !check ?
                                <AiOutlineCheck
                                onClick={this._handleCheck}
                                className="custom-icon is-size-6" 
                                /> :
                                <MdKeyboardArrowRight
                                onClick={this._handleCheck}
                                className="custom-icon is-size-6" 
                            />
                            }
                        </span>
                    </div>
                    <div className="column">
                        <span className="has-text-danger-dark">
                            <FaTrashAlt 
                                onClick={this._handleDelete}
                                className="custom-icon is-size-6" 
                            />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(null, {checkNotification, deleteNotification})(Notification);