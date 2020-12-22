import {
    LOADING_SUBSCRIPTIONS,
    GET_SUBSCRIPTIONS,
    CLEAR_SUBSCRIPTIONS,
} from '../actions/types'

const initialState = {
    subscriptions: [],
    areLoading: false,
};

export const subscriptionsReducer = (state=initialState, action) => {
    switch(action.type){
        case LOADING_SUBSCRIPTIONS:
            return {
                ...state,
                areLoading: true
            }
        case GET_SUBSCRIPTIONS:
            return {
                ...state,
                subscriptions: action.payload,
                areLoading: false
            }
        case CLEAR_SUBSCRIPTIONS:
            return {
                ...state,
                subscriptions: [],
            }
        default:
            return state
    }
}
