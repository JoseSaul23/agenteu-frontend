import {
    LOADING_UNIVERSITY_OPTIONS,
    LOADING_SCHOOL_OPTIONS,
    GET_UNIVERSITY_OPTIONS,
    GET_SCHOOL_OPTIONS,
    SET_UNIVERSITY,
    SET_SCHOOL,
    CLEAR_OPTIONS,
    GET_ERRORS
} from './types'
// import {getUser} from './authActions'
import axios from 'axios'

export const getUniversityOptions = () => (dispatch) => {

    dispatch({
        type: LOADING_UNIVERSITY_OPTIONS
    })

    // Petición HTTP a la API para obtener notificaciones del usuario autenticado.
    axios.get(`http://localhost:8000/api/universidades/options/`)
    .then( res => {   
        dispatch({ 
            type: GET_UNIVERSITY_OPTIONS,
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

export const setUniversity = (id) => (dispatch) => {
    dispatch( {
        type: SET_UNIVERSITY,
        payload: id
    })
}

export const setSchool = (id) => (dispatch) => {
    dispatch( {
        type: SET_SCHOOL,
        payload: id
    })
}

export const getSchoolOptions = (university_id) => (dispatch) => {
    dispatch({
        type: LOADING_SCHOOL_OPTIONS
    })

    // Petición HTTP a la API para obtener notificaciones del usuario autenticado.
    axios.get(`http://localhost:8000/api/universidades/${university_id}/school_options/`)
    .then( res => {
        dispatch({ 
            type: GET_SCHOOL_OPTIONS,
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

export const clearOptions = () => (dispatch) => {
    dispatch({
        type: CLEAR_OPTIONS
    })
}