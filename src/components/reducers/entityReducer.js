import {ENTITIES_LOADING, GET_ENTITIES, CLEAR_ENTITIES} from '../actions/types'

const initialState = {
    entities: [],
    page: 0,
    nextPage: null,
    isLoading: false,
    loadingMore: false,
}

export const entityReducer = (state=initialState, action) => {
    switch(action.type){
        case ENTITIES_LOADING:
            return {
                ...state,
                isLoading: state.page === 0 ? true : false,
                loadingMore: state.page > 0 ? true : false
            }
        case GET_ENTITIES:
            return {
                ...state,
                entities: [...state.entities, ...action.payload.results],
                page: state.page + 1,
                nextPage: action.payload.next,
                isLoading: false,
                loadingMore: false
            }
        case CLEAR_ENTITIES:
            return {
                ...state,
                entities: [],
                page: 0,
                nextPage: null
            }
        default:
            return state
    }
}