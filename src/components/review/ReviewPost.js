import React, {Component} from 'react'
import Review from './Review'
import RightPanel from '../common/RightPanel'
import {connect} from 'react-redux'
import {getReview, clearReview} from '../actions/reviewActions'
import PropTypes from 'prop-types'
import {RedirectAs404} from '../common/RedirectAs404'


export class ReviewPost extends Component {

    static propTypes = {
        getReview: PropTypes.func.isRequired,
        review: PropTypes.object.isRequired,
        isLoading: PropTypes.bool,
        clearReview: PropTypes.func.isRequired,
        error: PropTypes.object.isRequired,
    }

    componentDidMount() {
        const {id} = this.props.match.params
        this.props.getReview(id)
    }

    componentWillUnmount() {
        this.props.clearReview()
    }

    render() {

        if (this.props.error.status === 404) {
            return <RedirectAs404 location={this.props.location}/>
        }

        const {review} = this.props

        return(
        <div className="columns">
            <div className="column is-two-thirds">
                <div className="columns is-centered">
                    <div className="column is-four-fifths mt-6 pl-4">
                        {
                            this.props.isLoading ?
                            <div className="columns mb-6">
                                <div className="column has-text-centered">
                                    <button className="button is-link is-loading">Loading</button>
                                </div>
                            </div> :
                            <Review 
                                id={review.id}
                                text={review.text}
                                rating={review.rating}
                                difficulty={review.difficulty}
                                date={review.date}
                                user={review.user}
                                user_name={review.user_name}
                                entity={review.entity}
                                entity_name={review.entity_name}
                                entity_type={review.entity_type}
                                recomendations_count={review.recomendations_count}
                                recomendations={review.recomendations}
                                favorite={review.favorite}
                            />
                        }
                        
                    </div>
                </div>
            </div>
            <RightPanel />
        </div>
        );
    }
}

const mapStateToProps = state => ({
    review: state.reviews.review,
    isLoading: state.reviews.isLoading,
    error: state.error
});

export default connect(
    mapStateToProps, 
    {getReview, clearReview}
)(ReviewPost);