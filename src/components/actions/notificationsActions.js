import {
    LOADING_NOTIFICATIONS,
    GET_NOTIFICATIONS,
    DELETE_NOTIFICATION,
    CHECK_NOTIFICATION,
    CLEAR_NOTIFICATIONS,
    GET_ERRORS,
} from './types'
import {tokenConfig} from './authActions'
import axios from 'axios'

export const getNotifications = () => (dispatch, getState) => {

    dispatch({
        type: LOADING_NOTIFICATIONS
    })

    // Petición HTTP a la API para obtener notificaciones del usuario autenticado.
    axios.get(`http://localhost:8000/api/notificaciones/`, tokenConfig(getState))
    .then( res => {
        dispatch({ 
            type: GET_NOTIFICATIONS,
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

export const deleteNotification = (id) => (dispatch, getState) => {
    // Petición HTTP a la API para borrar notificacione del usuario autenticado.
    axios.delete(`http://localhost:8000/api/notificaciones/${id}/`, tokenConfig(getState))
    .then( res => {
        dispatch({ 
            type: DELETE_NOTIFICATION,
            payload: id
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

export const checkNotification = (id) => (dispatch, getState) => {
    // Petición HTTP a la API para borrar notificacione del usuario autenticado.
    axios.get(`http://localhost:8000/api/notificaciones/${id}/check_notification/`, tokenConfig(getState))
    .then( res => {
        dispatch({ 
            type: CHECK_NOTIFICATION,
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


export const clearNotifications = () => (dispatch) => {
    dispatch({
        type: CLEAR_NOTIFICATIONS
    })
}