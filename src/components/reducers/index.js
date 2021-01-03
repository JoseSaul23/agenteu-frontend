import {combineReducers} from 'redux'
import {authReducer} from './authReducer'
import {errorReducer} from './errorReducer'
import {reviewReducer} from './reviewReducer'
import {entityDetailsReducer} from './entityDetailsReducer'
import {entityReducer} from './entityReducer'
import {notificationReducer} from './notificationReducer'
import {userFeedReducer} from './userFeedReducer'
import {subscriptionsReducer} from './subscriptionsReducer'
import {messageReducer} from './messageReducer'

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    reviews: reviewReducer, 
    entityDetails: entityDetailsReducer,
    entities: entityReducer,
    notification: notificationReducer,
    userFeed: userFeedReducer,
    subscriptions: subscriptionsReducer,
    messages: messageReducer
});