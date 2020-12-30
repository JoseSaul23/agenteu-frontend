import React, {Component} from 'react'
import {Professor} from './Professor'
import {connect} from 'react-redux'
import {getEntitiesOfEntity, clearEntities} from '../actions/entityActions'
import PropTypes from 'prop-types'
import { Waypoint } from 'react-waypoint';


export class ProfessorsList extends Component {

    static propTypes = {
        entities: PropTypes.array.isRequired,
        getEntitiesOfEntity: PropTypes.func.isRequired,
        clearEntities: PropTypes.func.isRequired,
        isLoading: PropTypes.bool
    }

    componentDidMount() {
        const {entity} = this.props
        const {id} = this.props.match.params
        this.props.getEntitiesOfEntity(entity, id, 'professors')
    }

    componentDidUpdate (prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) { 
            const {entity} = this.props
            const {id} = this.props.match.params
            this.props.getEntitiesOfEntity(entity, id, 'professors')
        }
    }

    _loadMore = () => {
        console.log("aqui")
        if(this.props.nextPage){
            const {entity} = this.props
            const {id} = this.props.match.params
            this.props.getEntitiesOfEntity(entity, id, 'professors', this.props.page + 1)
        }
    }

    componentWillUnmount() {
        // Limpiar entidades cargadas
        this.props.clearEntities()
    }

    _renderProfessors = () => {
        if (this.props.entities.length === 0) {
            return (
                <div>No hay profesores</div>
            );
        }
        else {
            return this.props.entities.map( professor => {
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
                {this.props.isLoading ?
                    <div className="columns mb-6">
                        <div className="column has-text-centered">
                            <button className="button is-link is-loading">Loading</button>
                        </div>
                    </div> :
                    this._renderProfessors()
                }    
                {!this.props.loadingMore ? <Waypoint onEnter={this._loadMore} /> : ""}
                {this.props.loadingMore && 
                    <div className="columns mt-6">
                        <div className="column has-text-centered">
                            <button className="button is-link is-loading">Loading</button>
                        </div>
                    </div>
                }
            </div>  
        );
    }
}

const mapStateToProps = state => ({
    entities : state.entities.entities,
    isLoading: state.entities.isLoading,
    loadingMore: state.entities.loadingMore,
    page: state.entities.page,
    nextPage: state.entities.nextPage,
});

export default connect(mapStateToProps, {getEntitiesOfEntity, clearEntities})(ProfessorsList);