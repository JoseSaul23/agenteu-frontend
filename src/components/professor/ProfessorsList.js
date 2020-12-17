import React, {Component} from 'react'
import {Professor} from './Professor'
//  _renderReviews 
export class ProfessorsList extends Component {

    state = {
        professors: [],
    }

    _fetchProfessors = () => {
        const {entity} = this.props
        const {id} = this.props.match.params
        fetch(`http://localhost:8000/api/${entity}/${id}/professors`)
        .then(res => res.json())
        .then(professors => {
          this.setState({ professors })
        }) 
    }

    componentDidMount() {
        this._fetchProfessors()
    }

    _renderProfessors = () => {
        const {professors} = this.state

        if (professors.length === 0) {
            return (
                <div>No hay profesores</div>
            );
        }
        else {
            return professors.map( professor => {
                return (
                  <Professor 
                    key={professor.id} 
                    id={professor.id}
                    name={professor.name}
                    professor_university={professor.professor_university}
                    professor_school={professor.professor_school}
                    professor_school_name={professor.professor_school_name}
                    professor_university_name={professor.professor_university_name}
                    overall_difficulty={professor.overall_difficulty}
                    overall_rating={professor.overall_rating}
                    reviews_count={professor.reviews_count}
                    />
                  );
            }   )
        } 
    }

    render () {
        return (
            <div>
                {this._renderProfessors()}
            </div>  
        );
    }
}