import {combineReducers} from 'redux'
import {authReducer} from './authReducer'
import {errorReducer} from './errorReducer'
import {reviewReducer} from './reviewReducer'
import {entityDetailsReducer} from './entityDetailsReducer'

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    reviews: reviewReducer, 
    entityDetails: entityDetailsReducer
});