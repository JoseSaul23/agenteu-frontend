import {
    GET_REVIEWS,
    GET_REVIEW,
    ADD_REVIEW,
    EDIT_REVIEW,
    REVIEW_FORM_CLOSE,
    DELETE_REVIEW,
    RECOMMEND_REVIEW,
    CLEAR_REVIEWS,
    CLEAR_REVIEW
} from '../actions/types'

const initialState = {
    reviews: [],
    review: {},
    wasAdded: null
}

export const reviewReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_REVIEWS:
            return {
                ...state,
                reviews: action.payload
            }
        case GET_REVIEW:
            return {
                ...state,
                review: action.payload
            }
        case ADD_REVIEW:
        case EDIT_REVIEW:
            return {
                ...state,
                wasAdded: true
            }
        case DELETE_REVIEW:
            return {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.payload)
            }
        case RECOMMEND_REVIEW:
            let index = state.reviews.findIndex( (review) => review.id === action.payload.id )
            let temp = state.reviews
            temp[index] = action.payload
            return {
                ...state,
                reviews: state.reviews.map(review => review.id === action.payload.id ?
                    // transform the one with a matching id
                    { ...review, recomendations_count: action.payload.recomendations_count } : 
                    // otherwise return original todo
                    review
                )
            }
        case CLEAR_REVIEWS:
            return {
                ...state,
                reviews: []
            }
        case CLEAR_REVIEW:
            return {
                ...state,
                review: {}
            }
        case REVIEW_FORM_CLOSE:
            return {
                ...state,
                wasAdded: null
            }
        default:
            return state
    }
}