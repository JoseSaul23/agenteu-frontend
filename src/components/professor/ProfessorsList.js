import React, {Component} from 'react'
import {Professor} from './Professor'
//  _renderReviews 
export class ProfessorsList extends Component {

    state = {
        professors: [],
    }

    url= ""

    _setURL = () => {
        const {entity} = this.props
        const {id} = this.props.match.params

        if (entity === "university") {
            this.url = `/api/universidades/${id}/professors`
        } 
        if (entity === "school") {
            this.url = `/api/escuelas/${id}/professors`
        } 
    }

    _fetchProfessors = () => {
        fetch("http://localhost:8000" + this.url)
        .then(res => res.json())
        .then(professors => {
          this.setState({ professors })
        }) 
    }

    componentDidMount() {
        this._setURL()
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
                    name={professor.name}
                    professor_university={professor.professor_university}
                    professor_school={professor.professor_school}
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