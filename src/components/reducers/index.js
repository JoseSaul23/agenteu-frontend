import {combineReducers} from 'redux'
import {authReducer} from './authReducer'
import {errorReducer} from './errorReducer'
import {reviewReducer} from './reviewReducer'

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    reviews: reviewReducer, 
});