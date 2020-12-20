import {ENTITIES_LOADING, GET_ENTITIES, CLEAR_ENTITIES} from '../actions/types'

const initialState = {
    entities: [],
    isLoading: null,
}

export const entityReducer = (state=initialState, action) => {
    switch(action.type){
        case ENTITIES_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case GET_ENTITIES:
            return {
                ...state,
                entities: action.payload,
                isLoading: false,
            }
        case CLEAR_ENTITIES:
            return {
                ...state,
                entities: []
            }
        default:
            return state
    }
}