import {combineReducers} from 'redux'
import {authReducer} from './authReducer'
import {errorReducer} from './errorReducer'
import {reviewReducer} from './reviewReducer'
import {entityDetailsReducer} from './entityDetailsReducer'
import {entityReducer} from './entityReducer'
import {notificationReducer} from './notificationReducer'
import {userFeedReducer} from './userFeedReducer'

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    reviews: reviewReducer, 
    entityDetails: entityDetailsReducer,
    entities: entityReducer,
    notification: notificationReducer,
    userFeed: userFeedReducer,
});