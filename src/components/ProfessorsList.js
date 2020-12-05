import React, {Component} from 'react'
import {ProfessorInMenu} from './ProfessorInMenu'

export class ProfessorsInMenuList extends Component { //UniversityProfessorsList

    state = {
      professors: []
    }
  
    _fetchProfessors = () => {
      fetch(`http://localhost:8000/api/profesores/`) //poner paginacion en backend de a 3 o 4. De escuelas por ahora.
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
      return professors.map( professor => {  //pido escuelas por ahora
        return (
          <ProfessorInMenu
            key={professor.id}
            name={professor.name}
            last_name={professor.last_name} 
            overall_rating={professor.overall_rating}
            overall_difficulty={professor.overall_difficulty}
            reviews_count={professor.reviews_count}
            professor_university={professor.professor_university}
            />
          );
      } )
    }
  
    render () {
      return (
        <div>
          <div className="m-3 ml-5">
            <h5 className="title is-5">Profesores</h5>
          </div>
          <div className="columns is-multiline m-2">
            {this._renderProfessors()}
          </div>
        </div>
      );
    }
}