import {REVIEW_BY_USER_LOADED, CLEAR_REVIEW_BY_USER} from '../actions/types'
import {tokenConfig} from './authActions'
import axios from 'axios'

export const getReviewByUserOr404 = (entity, entity_id) => (dispatch, getState) => {
    
    axios.get(`http://localhost:8000/api/${entity}/${entity_id}/getReviewByUserOr404/`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: REVIEW_BY_USER_LOADED,
            payload: res.data
        })
    })
    .catch(e => console.log(e))
}

export const clearReviewByUser = () => (dispatch) => {
    dispatch({
        type: CLEAR_REVIEW_BY_USER
    })
}