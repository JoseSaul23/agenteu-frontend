import {ADD_REVIEW} from '../actions/types'

const initialState = {
    reviews: [],
    wasAdded: null
}

export const reviewReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_REVIEW:
            return {
                ...state,
                reviews: [...state.reviews, action.payload],
                wasAdded: true
            }
        default:
            return state
    }
}