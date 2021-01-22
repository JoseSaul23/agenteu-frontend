import React, {Component} from 'react'
import UserListReviews from '../user/UserListReviews'
import RightPanel from '../common/RightPanel'

export class UserReviews extends Component {
    render () {
        return (
            <div className="columns">
                <div className="column mt-4">
                    <div className="columns has-text-centered">
                        <div className="column">
                            <h5 className="title is-5 ml-5">Mis reseñas</h5>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-7-fullhd is-10-desktop is-9-tablet">
                            <UserListReviews review_type="reviews"/>
                        </div>
                    </div>
                </div>
                <RightPanel />
            </div>
        );
    }
}