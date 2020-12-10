import React, {Component} from 'react'
import {School} from './School'

export class SchoolsList extends Component {

    state = {
        schools: [],
    }

    status = ""

    _fetchSchools = () => {
        const {id} = this.props.match.params

        fetch(`http://localhost:8000/api/universidades/${id}/schools`)
        .then(res => res.json())
        .then(schools => {
          this.setState({ schools })
        })
    }

    componentDidMount() {
        this._fetchSchools()
    }

    // componentDidUpdate (prevProps) {
    //     if (prevProps.match.params.id !== this.props.match.params.id) { 
    //         this._fetchSchools()
    //     }
    // }

    _renderSchools = () => {
        const {schools} = this.state

        if (schools.length === 0) {
            return (
                <div>No hay escuelas</div>
            );
        }
        else {
            return schools.map( school => {
                return (
                    <School 
                    key={school.id} 
                    id={school.id}
                    name={school.name}
                    school_logo={school.logo}
                    school_university={school.school_university}
                    school_university_name={school.school_university_name}
                    overall_difficulty={school.overall_difficulty}
                    overall_rating={school.overall_rating}
                    reviews_count={school.reviews_count}
                    />
                    );
            }   )
        }
    }

    render () {
        return (
            <div>
                {this._renderSchools()}
            </div>  
        );
    }
}