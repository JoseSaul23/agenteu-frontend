import {
    ENTITY_LOADING,
    GET_ENTITY,
    CLEAR_ENTITY,
    SUBSCRIBE_TO_ENTITY
} from '../actions/types'

const initialState = {
    entity: {},
    entityIsLoading: false,
    reviewByUser: {},
}

export const entityDetailsReducer = (state=initialState, action) => {
    switch(action.type){
        case ENTITY_LOADING:
            return {
                ...state,
                entityIsLoading: true
            }
        case GET_ENTITY:
            return {
                ...state,
                entity: action.payload,
                entityIsLoading: false
            }
        case CLEAR_ENTITY:
            return {
                ...state,
                entity: {}
            }
        case SUBSCRIBE_TO_ENTITY:
            return {
                ...state,
                entity: action.payload
            }
        default:
            return state
    }
}