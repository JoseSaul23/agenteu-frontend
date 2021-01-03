import {
    ENTITY_LOADING,
    GET_ENTITY,
    CLEAR_ENTITY,
    GET_REVIEW,
    LOADING_REVIEW,
    SUBSCRIBE_TO_ENTITY,
    SUBSCRIBE_TO_ENTITY_IN_LIST,
    GET_ERRORS
} from '../actions/types'
import {tokenConfig} from './authActions'
import axios from 'axios'


export const getEntity = (entity, id) => (dispatch) => {

    dispatch({
        type: ENTITY_LOADING
    })

    axios.get(`${process.env.REACT_APP_API_URL}/api/${entity}/${id}/`)
    .then(res => {
        dispatch({
            type: GET_ENTITY,
            payload: res.data
        })
        dispatch(getReviewByUser(entity, id))
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
    axios.get(`${process.env.REACT_APP_API_URL}/api/${entity}/${id}/subscribe/`, tokenConfig(getState))
    .then( res => {
        dispatch({ 
            type: SUBSCRIBE_TO_ENTITY,
            payload: res.data
        });
        // Accion para el reducer subscriptionsReducer,
        // cuando las suscripciones estan en lista
        dispatch({
            type: SUBSCRIBE_TO_ENTITY_IN_LIST,
            payload: res.data
        })
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

export const getReviewByUser = (entity, entity_id) => (dispatch, getState) => {
    
    dispatch({
        type: LOADING_REVIEW
    })

    axios.get(`${process.env.REACT_APP_API_URL}/api/${entity}/${entity_id}/getReviewByUserOr404/`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_REVIEW,
            payload: res.data
        })
    })
    .catch(e => console.log(e))
}
