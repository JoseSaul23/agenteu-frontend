import React, {Component} from 'react'
import {ReviewsList} from '../review/ReviewsList'
import {ProfileNavBar} from '../common/ProfileNavBar'
import {RightPanel} from '../common/RightPanel'

export class UserLibrary extends Component {
    render () {
        return (
            <div className="columns">
                <div className="column is-two-thirds pr-0">
                    <div className="columns is-multiline is-centered pl-4">
                        <div className="column mb-3">
                            <ProfileNavBar subject="library"/>
                        </div>
                        <div className="column is-four-fifths mt-2">
                            <ReviewsList />
                        </div>
                    </div>
                </div>
                <RightPanel />
            </div>
        );
    }
}