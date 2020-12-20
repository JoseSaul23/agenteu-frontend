import React, {Component} from 'react'
import LastAdded from '../university/LastAdded'
import TopReviewsList from '../review/TopReviewsList'

export class Home extends Component {
    render () {
      return (
        <div>
          <LastAdded></LastAdded>
          <TopReviewsList></TopReviewsList>
        </div>
      );
    }
}