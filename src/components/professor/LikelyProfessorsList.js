import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {LikelyProfessor} from './LikelyProfessor'
import {connect} from 'react-redux'
import {getLikelyProfessors, clearLikelyProfessors} from '../actions/authActions'
import PropTypes from 'prop-types'

export class LikelyProfessorsList extends Component { 

    static propTypes = {
        auth: PropTypes.object.isRequired,
        getLikelyProfessors: PropTypes.func.isRequired,
        clearLikelyProfessors: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getLikelyProfessors()
    }

    componentDidUpdate(prevProps){
        const {auth} = this.props
        if(prevProps.auth.user){
            if(prevProps.auth.user.school !== auth.user.school){
                this.props.getLikelyProfessors()
            }
        }
    }

    componentWillUnmount() {
        // Limpiar entidades cargadas
        this.props.clearLikelyProfessors()
    }

    _renderProfessors = () => {
        const {likelyProfessors} = this.props.auth

        if(likelyProfessors.length === 0) {
            return (
                <div className="has-text-centered mt-6 mb-6 pt-6 pb-6">
                    <p className="ml-2 mr-2 mt-3 mb-3">
                        Elige tu universidad y escuela para ver profesores probables
                    </p>
                </div>
            );
        }
        else {
            return likelyProfessors.map( professor => {
                return (
                    <LikelyProfessor 
                        key={professor.id}
                        id={professor.id} 
                        name={professor.name}
                        reviews_count={professor.reviews_count}
                    />
                );
            })
        }
    }

    render () {

        const {error} = this.props

        return (
            <div className="columns is-multiline side-list m-6">
                <div className="column list-border-bottom has-text-centered">
                    <p className="black-title has-text-weight-medium big-text">Conoces o Conoceras</p>
                </div>
                {
                    this.props.auth.loadingProfessors ?
                    <React.Fragment>
                        <div className="column is-full has-text-centered list-border-bottom pt-3 pb-3">
                            <button className="button is-link is-loading">Loading</button>
                        </div>
                        <div className="column is-full has-text-centered list-border-bottom pt-3 pb-3">
                            <button className="button is-link is-loading">Loading</button>
                        </div>
                        <div className="column is-full has-text-centered list-border-bottom pt-3 pb-3">
                            <button className="button is-link is-loading">Loading</button>
                        </div>
                        <div className="column is-full has-text-centered list-border-bottom pt-3 pb-3">
                            <button className="button is-link is-loading">Loading</button>
                        </div>
                    </React.Fragment>
                    :
                    this._renderProfessors()
                }
                <div className="column is-full has-text-centered has-text-link">
                    {/* <Link to={this.see_more_url}> */}
                        Ver más
                    {/* </Link> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth : state.auth,
    error: state.error
  });
  
export default connect(mapStateToProps, {getLikelyProfessors, clearLikelyProfessors})(LikelyProfessorsList);