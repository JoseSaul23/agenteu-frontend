import React, {Component} from 'react'
import {School} from './School'
//  _renderSchools
export class SchoolsList extends Component {
    render () {
        return (
            <div>
                <School />
                <School />
                <School />
            </div>  
        );
    }
}