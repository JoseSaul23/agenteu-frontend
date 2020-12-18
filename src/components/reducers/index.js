import {combineReducers} from 'redux'
import {authReducer} from './authReducer'
import {errorReducer} from './errorReducer'
import {reviewReducer} from './reviewReducer'
import {entityDetailsReducer} from './entityDetailsReducer'
import {notificationReducer} from './notificationReducer'

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    reviews: reviewReducer, 
    entityDetails: entityDetailsReducer,
    notification: notificationReducer
});