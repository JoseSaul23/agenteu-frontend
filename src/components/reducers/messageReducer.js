import {GET_MESSAGES, CLEAR_MESSAGES} from '../actions/types'

const initialState = {
    message: ''
} 

export const messageReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                message: action.payload
            }
        case CLEAR_MESSAGES:
            return {
                ...state,
                message: ''
            }
        default:
            return {
                ...state
            }
    }
} 