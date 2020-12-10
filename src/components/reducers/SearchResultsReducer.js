import {FETCH_RESULTS} from '../actions/types'

const initial_state = {
    results: []
}

export const SearchResultsReducer = (state=initial_state, action) => {
    switch (action.type) {
        case FETCH_RESULTS:
            return {...state, results: action.payload };
        default:
            return state
    }
}