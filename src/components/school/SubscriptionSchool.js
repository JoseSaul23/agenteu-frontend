import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoIosNotifications} from 'react-icons/io'
import {connect} from 'react-redux'
import {subscribeToEntity} from '../actions/entityDetailsActions'
import PropTypes from 'prop-types'


export class SubscriptionSchool extends Component {

    static propTypes = {
        subscribeToEntity: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired
    }

    _handleSubscription = () => {
        this.props.subscribeToEntity('escuelas', this.props.id)
    }

    render () {
        const {
            id,
            name,
            school_university, 
            school_university_name,
            subscribers
        } 
        = this.props

        const {auth} = this.props

        return (
            <div className="columns is-multiline is-vcentered list-border-bottom">
                <div className="column is-6">
                    <div className="columns is-multiline">
                        <div className="column is-full big-text black-title has-text-weight-medium">
                            <Link to={"/escuelas/" + id}>{name}</Link>
                        </div>
                        <div className="column Top-review-numbers pt-0">
                            <div>
                                <Link to={"/universidades/" + school_university}>{school_university_name}</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                {
                    subscribers && 
                    subscribers.includes(auth.user.id) ?                                      
                    <IoIosNotifications
                        onClick={this._handleSubscription} 
                        className="custom-icon is-size-3 has-text-link"
                    /> :
                    <IoIosNotifications
                        onClick={this._handleSubscription}  
                        className="custom-icon is-size-3"
                    />
                }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {subscribeToEntity})(SubscriptionSchool);