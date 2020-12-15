import {ADD_REVIEW, EDIT_REVIEW, REVIEW_FORM_CLOSE} from '../actions/types'

const initialState = {
    wasAdded: null
}

export const reviewReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_REVIEW:
        case EDIT_REVIEW:
            return {
                ...state,
                wasAdded: true
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