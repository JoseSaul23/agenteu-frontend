import React, {Component} from 'react'
import {InstitutionInMenu} from './InstitutionInMenu'
import {connect} from 'react-redux'
import {getLastAdded, clearEntities} from '../actions/entityActions'
import PropTypes from 'prop-types'
import Skeleton from '@material-ui/lab/Skeleton';


export class LastAdded extends Component {
  
    static propTypes = {
      entities: PropTypes.array.isRequired,
      getLastAdded: PropTypes.func.isRequired,
      clearEntities: PropTypes.func.isRequired,
      isLoading: PropTypes.bool
    }

    componentDidMount() {
      this.props.getLastAdded()
    }

    componentWillUnmount() {
        // Limpiar entidades cargadas
        this.props.clearEntities()
    }
  
    _renderLastAdded = () => {
      if (this.props.entities.length === 0) {
        return (
            <div>No hay escuelas</div>
        );
      }
      else {
        return this.props.entities.map( inst => { 
          return (
            <InstitutionInMenu
              category="school"
              key={inst.id}
              id={inst.id}
              name={inst.name} 
              logo_img={inst.logo}
              overall_rating={inst.overall_rating}
              overall_difficulty={inst.overall_difficulty}
              reviews_count={inst.reviews_count}
            />
            );
        } ) 
      }
    }
  
    render () {

      const skeletons = [1, 2, 3];

      return (
        <div>
          <div className="m-3 ml-5">
            <h5 className="title is-5">Ultimas escuelas agregadas</h5>
          </div>
          <div className="columns is-multiline m-2">
            {
              this.props.isLoading ?
                <React.Fragment>
                  {
                    skeletons.map( ske => {
                      return (
                        <div key={ske} className="column is-one-quarter has-text-centered mb-4">
                          <div className="columns is-multiline">
                            <div className="column is-full">
                              <Skeleton variant="rect" width={255} height={65} />
                            </div>
                            <div className="column is-8 pt-0">
                              <Skeleton variant="rect" width={160} height={65} />
                            </div>
                            <div className="column is-4 pt-0">
                              <Skeleton variant="rect" width={70} height={65} />
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </React.Fragment>
                :
                this._renderLastAdded()
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

export default connect(mapStateToProps, {getLastAdded, clearEntities})(LastAdded);