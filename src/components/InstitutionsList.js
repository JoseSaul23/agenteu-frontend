import React, {Component} from 'react'
import {InstitutionInMenu} from './InstitutionInMenu'

export class InstitutionsInMenuList extends Component {

    state = {
      institutions: []
    }
  
    _fetchInstitutionsList = () => {
      fetch(`http://localhost:8000/api/universidades/`) //poner paginacion en backend de a 3 o 4. De escuelas por ahora.
      .then(res => res.json())
      .then(institutions => {
        this.setState({ institutions })
      }) 
    }
  
    componentDidMount() {
      this._fetchInstitutionsList()
    }
  
    _renderInstitutions = () => {
      const {institutions} = this.state 
      return institutions.map( institution => {  //pido escuelas por ahora
        return (
          <InstitutionInMenu
            key={institution.id}
            name={institution.name} 
            logo_img={institution.logo}
            overall_rating={institution.overall_rating}
            overall_difficulty={institution.overall_difficulty}
            //date={inst.date}
            school_university={institution.school_university}
            reviews_count={institution.reviews_count}
            />
          );
      } )
    }
  
    render () {
      return (
        <div>
          <div className="m-3 ml-5">
            <h5 className="title is-5">Instituciones</h5>
          </div>
          <div className="columns is-multiline m-2">
            {this._renderInstitutions()}
          </div>
        </div>
      );
    }
}