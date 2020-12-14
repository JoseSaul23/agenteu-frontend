import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addReview} from '../actions/reviewActions'
import {clearErrors} from '../actions/errorActions'

export class CreateReview extends Component {

    state = {
        text: '',
        difficulty: 10,
        rating: 1,
    }

    static propTypes = {
        addReview: PropTypes.func.isRequired,
        wasAdded: PropTypes.bool,
        error: PropTypes.object.isRequired,
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        const {text, difficulty, rating} = this.state
        const entity = this.props.match.params.id
        this.props.addReview({text, difficulty, rating, entity})
        // this.props.history.goBack(-1)
    }

    _handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    render () {

        const {text, difficulty, rating} = this.state
        const {error} = this.props

        return (
            <div>
                <div className="m-3 ml-5">
                <button onClick={() => {
                // history.push('/')
                this.props.history.goBack(-1);
            }}>go back
            </button>
                    <h5 className="title is-5">Es hora de escribir sobre Universidad Industrial de Santander.</h5>
                </div>
                <div className="columns">
                    <div className="column is-three-fifths pt-0">
                        <form onSubmit={this._handleSubmit} className="columns is-multiline m-2">
                            <div className="column is-full field is-four-fifths">
                                <label className="label">Escribe tu reseña: </label>
                                <div className="control">                 
                                    <textarea
                                        className="textarea"
                                        rows="4"
                                        name="text"
                                        onChange={this._handleChange}
                                        value={text}
                                    />
                                </div>
                                <p className="small-label">Quedan {200 - text.length} caracteres</p>
                                <p className="has-text-danger">
                                    {error.message.text ? error.message.text : '' }
                                </p>
                            </div>
                            <div className="column is-full pt-0">
                                <div className="columns is-multiline is-mobile is-vcentered">
                                    <div className="column is-12-mobile is-6-desktop black-title has-text-weight-medium">
                                        Danos su porcentaje de dificultad:
                                    </div>
                                    <div className="column is-6-mobile is-3-desktop pl-0 pr-0">
                                        <input 
                                            type="range"
                                            min="10"
                                            max="100"
                                            step="10"
                                            name="difficulty"
                                            onChange={this._handleChange}
                                            value={difficulty}
                                        />
                                    </div>
                                    <div className="column is-6-mobile is-1-desktop pl-0 big-text">
                                        {difficulty}%
                                    </div>
                                    <p className="has-text-danger">
                                        {error.message.difficulty ? error.message.difficulty : '' }
                                    </p>
                                </div>
                                <div className="columns is-multiline is-mobile is-vcentered">
                                    <div className="column is-12-mobile is-6-desktop black-title has-text-weight-medium">
                                        Danos su calificación general:
                                    </div>
                                    <div className="column is-6-mobile is-3-desktop pl-0 pr-0">
                                        <input
                                            type="range"
                                            min="1"
                                            max="5"
                                            step="1"
                                            name="rating"
                                            onChange={this._handleChange}
                                            value={rating}
                                        />
                                    </div>
                                    <div className="column is-6-mobile is-1-desktop pl-0 big-text">
                                        {rating}
                                    </div>
                                    <p className="has-text-danger">
                                        {error.message.rating ? error.message.rating : '' }
                                    </p>
                                </div>
                            </div>
                            <div className="column field mt-4">
                                <p className="control has-text-centered">
                                    <button className="button is-link is-normal">
                                        Crear reseña
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="column">
                        Caja de indicaciones
                    </div>
                </div>
            </div>
        );
    }
} 

const mapStateToProps = state => ({
    reviews: state.reviews.wasAdded,
    error: state.error
});

export default connect(mapStateToProps, {addReview, clearErrors})(CreateReview);