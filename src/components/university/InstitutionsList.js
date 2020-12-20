import React, {Component} from 'react'
import {InstitutionInMenu} from './InstitutionInMenu'
import {connect} from 'react-redux'
import {getInstitutions, clearEntities} from '../actions/entityActions'
import PropTypes from 'prop-types'
import Skeleton from '@material-ui/lab/Skeleton';

export class InstitutionsInMenuList extends Component {

    // state = {
    //   institutions: []
    // }
  
    // _fetchInstitutionsList = () => {
    //   fetch(`http://localhost:8000/api/universidades/`) //poner paginacion en backend de a 3 o 4. De escuelas por ahora.
    //   .then(res => res.json())
    //   .then(institutions => {
    //     this.setState({ institutions })
    //   }) 
    // }
  
    // componentDidMount() {
    //   this._fetchInstitutionsList()
    // }

    static propTypes = {
      entities: PropTypes.array.isRequired,
      getInstitutions: PropTypes.func.isRequired,
      clearEntities: PropTypes.func.isRequired,
      isLoading: PropTypes.bool
    }

    componentDidMount() {
      this.props.getInstitutions()
    }

    componentWillUnmount() {
        // Limpiar entidades cargadas
        this.props.clearEntities()
    }
  
    _renderInstitutions = () => {
      return this.props.entities.map( institution => {  //pido escuelas por ahora
        return (
          <InstitutionInMenu
            key={institution.id}
            id={institution.id}
            name={institution.name} 
            logo_img={institution.logo}
            overall_rating={institution.overall_rating}
            overall_difficulty={institution.overall_difficulty}
            school_university={institution.school_university}
            reviews_count={institution.reviews_count}
            />
          );
      } )
    }
  
    render () {

      const skeletons = [1, 2, 3];

      return (
        <div>
          <div className="m-3 ml-5">
            <h5 className="title is-5">Instituciones</h5>
          </div>
          <div className="columns is-multiline m-2">
          {
            this.props.isLoading ?
              <React.Fragment>
                {
                  skeletons.map( ske => {
                    return (
                      <div className="column is-one-quarter has-text-centered">
                        <div className="columns is-multiline">
                          <div className="column is-full">
                            <Skeleton variant="rect" width={255} height={120} />
                          </div>
                          <div className="column is-8 pt-0">
                            <Skeleton variant="rect" width={160} height={75} />
                          </div>
                          <div className="column is-4 pt-0">
                            <Skeleton variant="rect" width={70} height={75} />
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </React.Fragment>
              :
              this._renderInstitutions()
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

export default connect(mapStateToProps, {getInstitutions, clearEntities})(InstitutionsInMenuList);