import React, {Component} from 'react'
import {LastAdded} from './LastAdded'
import {TopReviewsList} from './TopReviewsList'

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