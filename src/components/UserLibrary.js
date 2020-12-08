import React, {Component} from 'react'
import {ReviewsList} from './ReviewsList'
import {SideList} from './SideList'
import {ProfileNavBar} from './ProfileNavBar'

export class UserLibrary extends Component {
    render () {
        return (
            <div className="columns">
                <div className="column is-two-thirds pr-0">
                    <div className="columns is-multiline is-centered pl-4">
                        <div className="column mb-3">
                            <ProfileNavBar />
                        </div>
                        <div className="column is-four-fifths mt-2">
                            <ReviewsList />
                        </div>
                    </div>
                </div>
                <div className="column right-side-panel is-hidden-mobile">
                   <SideList />
                </div>
            </div>
        );
    }
}