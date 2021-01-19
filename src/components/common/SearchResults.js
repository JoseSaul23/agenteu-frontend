import React, {Component} from 'react'
import {University} from '../university/University'
import {Professor} from '../professor/Professor'
import {School} from '../school/School'
import {ReviewInResults} from '../review/ReviewInResults'


export class SearchResults extends Component {

    state = {
        results: [],
        first_result_name: "",
        first_result_reviews: [],
        areLoading: false
    }

    _fetchResults = () => {
        const {entity, q} = this.props.match.params
        this.setState({areLoading: true})

        fetch(`${process.env.REACT_APP_API_URL}/api/${entity}/?search=` + q)
        .then(res => res.json())
        .then(res => {
            this.setState({results: res.results, areLoading: false})
            if (res.results.length > 0){
                this.setState( {
                    first_result_name: res.results[0].name
                })
                this._fetchFirstResultReviews(res.results[0].id)
            }
        }) 
    }

    componentDidMount() {
        this._fetchResults()
    }

    componentDidUpdate (prevProps) {
        const {entity, q} = this.props.match.params
        if (prevProps.match.params.q !== q || prevProps.match.params.entity !== entity ) { 
            this._fetchResults()
        }
    }

    _renderProfessorsResults() {
        const {results} = this.state
        if (results.length === 0) {
            return (
                <div>No se encontraron resultados para su búsqueda.</div>
            );
        }
        else {
            return results.map( result => {
                return (
                    <Professor 
                        key={result.id} 
                        id={result.id}
                        name={result.name}
                        professor_university={result.professor_university}
                        professor_school={result.professor_school}
                        professor_school_name={result.professor_school_name}
                        professor_university_name={result.professor_university_name}
                        overall_difficulty={result.overall_difficulty}
                        overall_rating={result.overall_rating}
                        reviews_count={result.reviews_count}
                    />
                    );
            })
        }
    }

    _renderUniversitiesResults() {
        const {results} = this.state
        if (results.length === 0) {
            return (
                <div>No se encontraron resultados para su búsqueda.</div>
            );
        }
        else {
            return results.map( result => {
                return (
                    <University 
                    key={result.id}
                    id={result.id}
                    name={result.name}
                    logo={result.logo}
                    reviews_count={result.reviews_count}
                    overall_rating={result.overall_rating}
                    overall_difficulty={result.overall_difficulty}
                    />
                    );
            })
        }
    }

    _renderSchoolsResults() {
        const {results} = this.state
        if (results.length === 0) {
            return (
                <div>No se encontraron resultados para su búsqueda.</div>
            );
        }
        else {
            return results.map( result => {
                return (
                    <School 
                    key={result.id}
                    id={result.id}
                    name={result.name}
                    school_logo={result.logo}
                    school_university={result.school_university}
                    school_university_name={result.school_university_name}
                    reviews_count={result.reviews_count}
                    overall_rating={result.overall_rating}
                    overall_difficulty={result.overall_difficulty}
                    />
                    );
            })
        }
    }

    _fetchFirstResultReviews = (id) => {
        const {entity} = this.props.match.params

        fetch(`${process.env.REACT_APP_API_URL}/api/${entity}/${id}/reviews`)
        .then(res => res.json())
        .then(res => {
            this.setState({first_result_reviews: res.results})
        }) 
    }

    _renderFirstResultReviews = () => {
        const {first_result_reviews} = this.state
        if (first_result_reviews.length === 0) {
            return (
                <div>Sin reseñas</div>
            );
        }
        else {
            return first_result_reviews.map( review => {
                return (
                    <ReviewInResults 
                        key={review.id}
                        id={review.id}
                        text={review.text}
                        rating={review.rating}
                        difficulty={review.difficulty}
                        date={review.date}
                        user_name={review.user_name}
                        entity={review.entity}
                        entity_name={review.entity_name}
                        entity_type={review.entity_type}
                    />
                    );
            })
        }
    }

    render() {
        const {entity} = this.props.match.params
        const {results, first_result_name} = this.state

        return (
            <div>
                {this.state.areLoading ? 
                <div className="columns mb-6">
                <div className="column has-text-centered">
                    <button className="button is-link is-loading">Loading</button>
                </div>
            </div> 
                :
                <div className="columns is-multiline m-2">
                    { 
                        entity === "profesores"
                        ? 
                            <div className="column is-one-quarter">
                                {this._renderProfessorsResults()}
                            </div>
                        :   
                            entity === "universidades"
                            ?
                                this._renderUniversitiesResults()
                            :
                                entity === "escuelas"
                                ?
                                    this._renderSchoolsResults()
                                :
                                    <div>Eliga una categoria de búsqueda</div>
                    }   
                </div>
                }
                {results.length !== 0
                ?   <React.Fragment>
                        <hr className="horizontal-line"/>
                        <div className="m-3 ml-5">
                            <h5 className="title is-5">Ultimas reseñas sobre {first_result_name}</h5>
                        </div>
                        <div className="columns is-multiline m-2 mt-5">
                            {this._renderFirstResultReviews()} 
                        </div>
                    </React.Fragment>
                :
                    <React.Fragment />
                }
            </div>
        );
    }
}