import React, {Component} from 'react'
import {School} from './School'
import {connect} from 'react-redux'
import {getEntitiesOfEntity, clearEntities} from '../actions/entityActions'
import PropTypes from 'prop-types'
import { Waypoint } from 'react-waypoint';


export class SchoolsList extends Component {

    static propTypes = {
        entities: PropTypes.array.isRequired,
        getEntitiesOfEntity: PropTypes.func.isRequired,
        clearEntities: PropTypes.func.isRequired,
        isLoading: PropTypes.bool
    }

    componentDidMount() {
        this.props.getEntitiesOfEntity('universidades', this.props.match.params.id, 'schools')
    }

    componentDidUpdate (prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) { 
            this.props.getEntitiesOfEntity('universidades', this.props.match.params.id, 'schools')
        }
    }

    _loadMore = () => {
        const {id} = this.props.match.params
        if(this.props.nextPage){
            this.props.getEntitiesOfEntity('universidades', id, 'schools', this.props.page + 1)
        }
    }

    componentWillUnmount() {
        // Limpiar entidades cargadas
        this.props.clearEntities()
    }

    _renderSchools = () => {
        if (this.props.entities.length === 0) {
            return (
                <div>No hay escuelas</div>
            );
        }
        else {
            return this.props.entities.map( school => {
                return (
                    <School 
                        key={school.id} 
                        id={school.id}
                        name={school.name}
                        school_logo={school.logo}
                        school_university={school.school_university}
                        school_university_name={school.school_university_name}
                        overall_difficulty={school.overall_difficulty}
                        overall_rating={school.overall_rating}
                        reviews_count={school.reviews_count}
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
                    this._renderSchools()
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

export default connect(mapStateToProps, {getEntitiesOfEntity, clearEntities})(SchoolsList);