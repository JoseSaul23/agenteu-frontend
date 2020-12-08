import React, {Component} from 'react'
import {ReviewsList} from './ReviewsList'
import {SideList} from './SideList'

export class UserReviews extends Component {
    render () {
        return (
            <div className="columns">
                <div className="column is-two-thirds pr-0 mt-4">
                    <div className="columns is-multiline is-centered pl-4">
                        <div className="column is-four-fifths mb-2">
                            <h5 className="title is-5">Mis reseñas</h5>
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