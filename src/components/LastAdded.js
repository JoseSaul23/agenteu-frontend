import React, {Component} from 'react'
import {InstitutionInMenu} from './InstitutionInMenu'

export class LastAdded extends Component {

    state = {
      lastAdded: []
    }
  
    _fetchLastAdded = () => {
      fetch(`http://localhost:8000/api/escuelas/`) //poner paginacion en backend de a 3 o 4. De escuelas por ahora.
      .then(res => res.json())
      .then(lastAdded => {
        this.setState({ lastAdded })
      }) 
    }
  
    componentDidMount() {
      this._fetchLastAdded()
    }
  
    _renderLastAdded = () => {
      const {lastAdded} = this.state 
      return lastAdded.map( inst => {  //pido escuelas por ahora
        return (
          <InstitutionInMenu
            key={inst.id}
            name={inst.name} 
            logo_img={inst.logo}
            overall_rating={inst.overall_rating}
            overall_difficulty={inst.overall_difficulty}
            //date={inst.date}
            school_university={inst.school_university}
            reviews_count={inst.reviews_count}
            />
          );
      } )
    }
  
    render () {
      return (
        <div>
          <div className="m-3 ml-5">
            <h5 className="title is-5">Ultimas escuelas agregadas</h5>
          </div>
          <div className="columns is-multiline m-2">
            {this._renderLastAdded()}
          </div>
        </div>
      );
    }
}