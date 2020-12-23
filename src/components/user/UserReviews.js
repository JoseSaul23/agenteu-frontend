import React, {Component} from 'react'
import UserListReviews from '../user/UserListReviews'
import RightPanel from '../common/RightPanel'

export class UserReviews extends Component {
    render () {
        return (
            <div className="columns">
                <div className="column is-two-thirds mt-4">
                    <div className="columns is-multiline is-centered pl-4">
                        <div className="column is-four-fifths mb-2">
                            <h5 className="title is-5">Mis reseñas</h5>
                        </div>
                        <div className="column is-four-fifths mt-2">
                            <UserListReviews review_type="reviews"/>
                        </div>
                    </div>
                </div>
                <RightPanel />
            </div>
        );
    }
}