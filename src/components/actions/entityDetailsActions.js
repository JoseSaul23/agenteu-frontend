import {
    ENTITY_LOADING,
    GET_ENTITY,
    CLEAR_ENTITY,
    REVIEW_BY_USER_LOADED,
    CLEAR_REVIEW_BY_USER,
    SUBSCRIBE_TO_ENTITY,
    GET_ERRORS
} from '../actions/types'
import {tokenConfig} from './authActions'
import axios from 'axios'


export const getEntity = (entity, id) => (dispatch) => {

    dispatch({
        type: ENTITY_LOADING
    })

    axios.get(`http://localhost:8000/api/${entity}/${id}/`)
    .then(res => {
        dispatch({
            type: GET_ENTITY,
            payload: res.data
        })
        dispatch(getReviewByUserOr404(entity, id))
    })
    .catch(e => {
        const errors = {message: e.response.data, status: e.response.status}
        dispatch( {
            type: GET_ERRORS,
            payload: errors
        })
    })
} 

export const subscribeToEntity  = (entity, id) => (dispatch, getState) => {
    // Petición HTTP a la API para suscribirse a reseña 
    axios.get(`http://localhost:8000/api/${entity}/${id}/subscribe/`, tokenConfig(getState))
    .then( res => {
        dispatch({ 
            type: SUBSCRIBE_TO_ENTITY,
            payload: res.data
        });
    })
    .catch( e => {
        const errors = {message: e.response.data, status: e.response.status}
        dispatch( {
            type: GET_ERRORS,
            payload: errors
        })
    })
}

export const clearEntity = () => (dispatch) => {
    dispatch({
        type: CLEAR_ENTITY
    })
}

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
