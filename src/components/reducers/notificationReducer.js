import {
    LOADING_NOTIFICATIONS, 
    GET_NOTIFICATIONS,
    DELETE_NOTIFICATION,
    CHECK_NOTIFICATION,
    CLEAR_NOTIFICATIONS
} from '../actions/types'

const initialState = {
    notifications: [],
    areLoading: false, 
}

export const notificationReducer = (state=initialState, action) => {
    switch(action.type){
        case LOADING_NOTIFICATIONS:
            return {
                ...state,
                areLoading: true,
            }
        case GET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload,
                areLoading: false
            }
        case DELETE_NOTIFICATION:
            return {
                ...state,
                notifications: state.notifications.filter( notification => notification.id !== action.payload )
            }
        case CHECK_NOTIFICATION:
            return {
                ...state,
                notifications: state.notifications.map( (notification) => notification.id === action.payload.id ?
                    // Se transforma la notificacion con el id recibido
                    { ...notification, check: action.payload.check } : 
                    // Si no, se regresa la original
                    notification
                )
            }
        case CLEAR_NOTIFICATIONS:
            return {
                ...state,
                notifications: []
            }
        default:
            return state
    }
}