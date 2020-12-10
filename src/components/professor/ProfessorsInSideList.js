import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {ProfessorInSideList} from './ProfessorInSideList'

export class ProfessorsInSideList extends Component { 

    state = {
        professors: [],
    }

    url = ""

    see_more_url = ""

    _setURLs = (subject, id) => {
        if (subject === "university") {
            this.url = `/api/universidades/${id}/top_professors`
            this.see_more_url = `/universidades/${id}/profesores`
        } 
        if (subject === "school") {
            this.url = `/api/escuelas/${id}/top_professors`
            this.see_more_url = `/escuelas/${id}/profesores`
        } 
        //hacer que la api devuelva la escuela de los profesores, si se puede????

        //if (entity === "user") {
            // this.url = `/users/likely_professors`
            // se manda peticion con header Token a user likely_professors (crear accion en backend)
        //}
    }

    _fetchProfessors = (id) => {
        // fetch("http://localhost:8000" + this.url)
        fetch("http://localhost:8000/api/profesores")
      .then(res => res.json())
      .then(professors => {
        this.setState({ professors })
      }) 
    }

    componentDidMount() {
        const {subject, id} = this.props
        this._setURLs(subject, id)
        this._fetchProfessors()
    }

    componentDidUpdate (prevProps) {
        if (prevProps.id !== this.props.id) {
            this._setURLs(this.props.subject, this.props.id, this.props.school_id)
            this._fetchProfessors()
        }
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
                this.see_more = professor.school_professor
                return (
                  <ProfessorInSideList 
                    key={professor.id}
                    id={professor.id} 
                    name={professor.name}
                    reviews_count={professor.reviews_count}
                    />
                  );
            }   )
        } 
    }

    render () {
        return (
            <div className="columns is-multiline side-list m-6">
                <div className="column list-border-bottom">
                    <p className="black-title has-text-weight-medium big-text">Top Profesores</p>
                </div>
                {this._renderProfessors()}
                <div className="column is-full has-text-centered has-text-link">
                    <Link to={this.see_more_url}>
                        Ver más
                    </Link>
                </div>
            </div>
        );
    }
}