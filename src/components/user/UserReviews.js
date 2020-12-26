import React, {Component} from 'react'
import UserListReviews from '../user/UserListReviews'
import RightPanel from '../common/RightPanel'

export class UserReviews extends Component {
    render () {
        return (
            <div className="columns">
                <div className="column is-8-desktop mt-4">
                    <h5 className="title is-5 ml-5">Mis reseñas</h5>
                    <div className="columns is-multiline is-centered">
                        <div className="column is-10-desktop is-9-tablet">
                            <UserListReviews review_type="reviews"/>
                        </div>
                    </div>
                </div>
                <RightPanel />
            </div>
        );
    }
}