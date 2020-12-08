import React, {Component} from 'react'
import {Professor} from './Professor'
//  _renderReviews 
export class ProfessorsList extends Component {
    render () {
        return (
            <div>
                <Professor />
                <Professor />
                <Professor />
            </div>  
        );
    }
}