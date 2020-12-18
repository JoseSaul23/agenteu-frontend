import {GET_NOTIFICATIONS, DELETE_NOTIFICATION, CHECK_NOTIFICATION, CLEAR_NOTIFICATIONS} from '../actions/types'

const initialState = {
    notifications: []
}

export const notificationReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload
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