import {
    LOADING_SUBSCRIPTIONS,
    GET_SUBSCRIPTIONS,
    CLEAR_SUBSCRIPTIONS,
    GET_ERRORS
} from './types'
import axios from 'axios'
import {tokenConfig} from './authActions'

export const getSubscriptions = (entity) => (dispatch, getState) => {
    dispatch({
        type: LOADING_SUBSCRIPTIONS,
    })

    // Peticion HTTP para obtener suscripciones de usuario autenticado
    axios.get(`http://localhost:8000/auth/users/subscriptions_to_${entity}/`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_SUBSCRIPTIONS,
            payload: res.data
        })
    })
    .catch(e => {
        const errors = {message: e.response.data, status: e.response.status}
        dispatch( {
            type: GET_ERRORS,
            payload: errors
        })
    })
}

export const clearSubscriptions = () => (dispatch) => {
    dispatch({
        type: CLEAR_SUBSCRIPTIONS
    })
}
