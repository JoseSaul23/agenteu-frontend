import {
    LOADING_SUBSCRIPTIONS,
    GET_SUBSCRIPTIONS,
    SUBSCRIBE_TO_ENTITY_IN_LIST,
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
        case SUBSCRIBE_TO_ENTITY_IN_LIST:
            return {
                ...state,
                subscriptions: state.subscriptions.map( subs => subs.id === action.payload.id ?
                    {...subs, subscribers: action.payload.subscribers} :
                    subs 
                )
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
