import React, {Component} from 'react'
import {Review} from './Review'
//  _renderReviews 
export class ReviewsList extends Component {
    render () {
        return (
            <div>
                <Review />
                <Review />
                <Review />
            </div>  
        );
    }
}