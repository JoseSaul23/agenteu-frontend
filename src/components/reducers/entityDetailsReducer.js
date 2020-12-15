import {REVIEW_BY_USER_LOADED, CLEAR_REVIEW_BY_USER} from '../actions/types'

const initialState = {
    reviewByUser: {},
}

export const entityDetailsReducer = (state=initialState, action) => {
    switch(action.type){
        case REVIEW_BY_USER_LOADED:
            return {
                ...state,
                reviewByUser: action.payload
            }
        case CLEAR_REVIEW_BY_USER:
            return {
                ...state,
                reviewByUser: {}
            }
        default:
            return state
    }
}