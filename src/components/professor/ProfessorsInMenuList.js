import React, {Component} from 'react'
import {ProfessorInMenu} from './ProfessorInMenu'
import {connect} from 'react-redux'
import {getProfessors, clearEntities} from '../actions/entityActions'
import PropTypes from 'prop-types'
import Skeleton from '@material-ui/lab/Skeleton';


export class ProfessorsInMenuList extends Component { //UniversityProfessorsList

    // state = {
    //   professors: []
    // }
  
    // _fetchProfessors = () => {
    //   fetch(`http://localhost:8000/api/profesores/`) //poner paginacion en backend de a 3 o 4. De escuelas por ahora.
    //   .then(res => res.json())
    //   .then(professors => {
    //     this.setState({ professors })
    //   }) 
    // }
  
    static propTypes = {
      entities: PropTypes.array.isRequired,
      getProfessors: PropTypes.func.isRequired,
      clearEntities: PropTypes.func.isRequired,
      isLoading: PropTypes.bool
    }

    componentDidMount() {
      this.props.getProfessors()
    }

    componentWillUnmount() {
        // Limpiar entidades cargadas
        this.props.clearEntities()
    }
  
    _renderProfessors = () => {
      return this.props.entities.map( professor => { 
        return (
          <ProfessorInMenu
            key={professor.id}
            id={professor.id}
            name={professor.name}
            last_name={professor.last_name} 
            overall_rating={professor.overall_rating}
            overall_difficulty={professor.overall_difficulty}
            reviews_count={professor.reviews_count}
            professor_university_name={professor.professor_university_name}
            />
          );
      } )
    }
  
    render () {

      const skeletons = [1, 2];

      return (
        <div>
          <div className="m-3 ml-5">
            <h5 className="title is-5">Profesores</h5>
          </div>
          <div className="columns is-multiline m-2">
          {
            this.props.isLoading ?
              <React.Fragment>
                {
                  skeletons.map( ske => {
                    return (
                      <div key={ske} className="column is-one-quarter has-text-centered">
                        <div className="columns is-multiline">
                          <div className="column is-full">
                            <Skeleton variant="rect" width={260} height={45} />
                          </div>
                          <div className="column is-full pt-0">
                            <Skeleton variant="rect" width={260} height={100} />
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </React.Fragment>:
              this._renderProfessors()
            }
          </div>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  entities : state.entities.entities,
  isLoading: state.entities.isLoading
});

export default connect(mapStateToProps, {getProfessors, clearEntities})(ProfessorsInMenuList);