import React, {Component} from 'react'
import {ProfessorInMenu} from './ProfessorInMenu'
import {connect} from 'react-redux'
import {getProfessors, clearEntities} from '../actions/entityActions'
import PropTypes from 'prop-types'
import Skeleton from '@material-ui/core/Skeleton';
import { Waypoint } from 'react-waypoint';


export class ProfessorsInMenuList extends Component { //UniversityProfessorsList
  
    static propTypes = {
      entities: PropTypes.array.isRequired,
      getProfessors: PropTypes.func.isRequired,
      clearEntities: PropTypes.func.isRequired,
      isLoading: PropTypes.bool
    }

    componentDidMount() {
      this.props.getProfessors()
    }

    _loadMore = () => {
      if(this.props.nextPage) this.props.getProfessors(this.props.page + 1)
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

      const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12];

      return (
        <div>
          <div className="m-3 mb-4 ml-5">
            <h5 className="title is-5">Profesores</h5>
          </div>
          <div className="columns is-multiline">
          {this._renderProfessors()}
          {
            this.props.isLoading &&
              skeletons.map( ske => {
                return (
                  <div key={ske} className="column is-one-quarter has-text-centered">
                    <div className="columns is-multiline">
                      <div className="column is-full">
                        <Skeleton variant="rectangular" width={260} height={45} />
                      </div>
                      <div className="column is-full pt-0">
                        <Skeleton variant="rectangular" width={260} height={100} />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <Waypoint onEnter={this._loadMore} />
        </div>
      );
    }
}

const mapStateToProps = state => ({
  entities : state.entities.entities,
  isLoading: state.entities.isLoading,
  page: state.entities.page,
  nextPage: state.entities.nextPage
});

export default connect(mapStateToProps, {getProfessors, clearEntities})(ProfessorsInMenuList);