import React, {Component} from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import {AiOutlineCheck} from 'react-icons/ai'
import {GoPrimitiveDot} from 'react-icons/go'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {connect} from 'react-redux'
import {checkNotification, deleteNotification} from '../actions/notificationsActions'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

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
        // Se envian fecha y id pero no se usan en renderizado aun
        const {message, check, subject, subject_id} = this.props

        const link = () => {
            if(subject==="new_review"){
                return `/publicaciones/${subject_id}`
            }
        }

        return (
            <div className="pt-2 pb-2 pl-4 pr-4 list-border-bottom">
                <div className="columns is-mobile">
                    <div className="column is-10-desktop is-8-mobile is-9-tablet">
                        {   
                            !check ?
                            <GoPrimitiveDot className="has-text-link"/> :
                            ""
                        }
                        <Link to={link}> 
                            {message}
                        </Link>
                    </div>
                    <div className="column has-text-centered is-1-desktop">
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
                    <div className="column has-text-centered is-1-desktop">
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