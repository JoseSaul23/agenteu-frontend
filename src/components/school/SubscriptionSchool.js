import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoIosNotifications} from 'react-icons/io'

export class SubscriptionSchool extends Component {
    render () {
        const {
            id,
            name,
            school_university, 
            school_university_name,
        } 
        = this.props

        return (
            <div className="columns is-multiline is-vcentered list-border-bottom">
                <div className="column is-6">
                    <div className="columns is-multiline">
                        <div className="column is-full big-text black-title has-text-weight-medium">
                            {name}
                        </div>
                        <div className="column Top-review-numbers pt-0">
                            <div>{school_university_name}</div>
                        </div>
                    </div>
                </div>
                <div className="column"> 
                    <IoIosNotifications className="custom-icon is-size-3"/>
                </div>
            </div>
        );
    }
}