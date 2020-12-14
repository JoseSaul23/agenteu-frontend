import React, {Component} from 'react'
import {IoIosNotifications} from 'react-icons/io'
import {_myColor} from '../common/util'
import axios from 'axios'
import {RedirectAs404} from '../common/RedirectAs404'
import {Link} from 'react-router-dom'

export class UniversityDetails extends Component {

    state = {
        university: {},
        error: false,
        loading: true
    }

    _fetchUniversity = () => {
        axios.get("http://localhost:8000/api/universidades/" + this.props.match.params.id)
            .then(res => {
                this.setState({ university: res.data })
                this.setState({loading: false})
            })
            .catch(e => this.setState({error:true}))
    }

    componentDidMount() {
        this._fetchUniversity()
    }

    componentDidUpdate (prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) { 
            this._fetchUniversity()
        }
    }

    render () {

        if (this.state.error) {
            return <RedirectAs404 location={this.props.location}/>
        }

        const {id, name, logo, professors_count, overall_difficulty, overall_rating, reviews_count, subscribers_count} 
        = this.state.university

        if( this.state.loading){
            return <button className="button is-link is-loading">Loading</button>
        }

        return (
            <div className="columns is-multiline">
                <div className="column">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="column is-full black-title big-text pb-0 pt-0 has-text-weight-medium">
                    {name}
                </div>
                <div className="column">
                    <div className="columns is-vcentered is-mobile ">
                        <div className="column has-text-weight-medium is-three-quarters">
                            {reviews_count} reseñas | {professors_count} profesores
                        </div>
                        <div className="column">
                            <IoIosNotifications  className="is-size-2"></IoIosNotifications>
                        </div>
                    </div>
                    <div className="columns is-vcentered is-mobile has-text-weight-medium">
                        <div className="column has-text-centered Top-review-numbers">
                            <p>calificación general</p>
                            <p 
                                style={{color: _myColor(overall_rating, "rating")}} 
                                className="is-size-4 pt-2"
                            >
                                {overall_rating? overall_rating : "N/A"}
                            </p>
                        </div>
                        <div className="column has-text-centered Top-review-numbers">
                            <p>dificultad promedio</p>
                            <p 
                                style={{color: _myColor(overall_difficulty, "difficulty")}}
                                className="is-size-4 pt-2"
                            >
                                {overall_difficulty? overall_difficulty + "%": "N/A"}
                            </p>
                        </div>
                        <div className="column">
                            <Link to={"/publicar/" + id}>
                                <button className="button is-small is-link">
                                    <span className="medium-text has-text-weight-medium">Crear reseña</span>
                                </button> 
                            </Link>
                        </div>
                    </div>
                    <div className="pb-3 has-text-weight-medium mt-2 mb-2">
                        <span className="black-title">{subscribers_count}</span> usuarios esperan nueva reseña
                    </div>
                </div>
            </div>
        );
    }
}