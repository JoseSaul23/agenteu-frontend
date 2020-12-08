import React, {Component} from 'react'
import {University} from './University'
import {Professor} from './Professor'
import {School} from './School'
import {ReviewInResults} from './ReviewInResults'

export class SearchResults extends Component {
    render() {
        return (
            <div>
                <div className="columns is-multiline m-2 pl-4">
                    {/* {this._renderResults()} */}
                    {/* <University />  */}
                        <School />
                   
                    {/* <div className="column is-one-quarter">
                        <Professor />
                        <Professor />
                        <Professor />
                    </div> */}
                </div>
                <hr className="has-background-dark"/>
                <div className="m-3 ml-5">
                    <h5 className="title is-5">Ultimas reseñas sobre Amaranta Jose Galileo Gutierrez</h5>
                </div>
                <div className="columns is-multiline m-2 mt-5 pl-4">
                    {/* {this._renderSingleResultReviews()} */} 
                    <ReviewInResults />
                    <div className="column is-four-fifths p-0"></div>
                    <ReviewInResults />
                    <div className="column is-four-fifths p-0"></div>
                    <ReviewInResults />
                </div>
            </div>
        );
    }
}