import {ENTITIES_LOADING, GET_ENTITIES, CLEAR_ENTITIES, GET_ERRORS} from './types'
import axios from 'axios'


export const getEntitiesOfEntity = (entity, id, entities, page=1) => (dispatch) => {
    dispatch({
        type: ENTITIES_LOADING
    })

    // universidades => schools, professors
    // escuelas => professors
    axios.get(`${process.env.REACT_APP_API_URL}/api/${entity}/${id}/${entities}/?page=${page}`)
    .then(res => {
        dispatch({
            type: GET_ENTITIES,
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

// cuando muestre las ultimas univerisidades quitar
// y usar getInstitutions con page = 1
export const getLastAdded = () => (dispatch) => {
    dispatch({
        type: ENTITIES_LOADING
    })

    // Ultimas escuelas agregadas
    axios.get(`${process.env.REACT_APP_API_URL}/api/escuelas/`)
    .then(res => {
        dispatch({
            type: GET_ENTITIES,
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

export const getInstitutions = (page=1) => (dispatch) => {
    dispatch({
        type: ENTITIES_LOADING
    })

    // Todas las universidades
    axios.get(`${process.env.REACT_APP_API_URL}/api/universidades/?page=${page}`)
    .then(res => {
        dispatch({
            type: GET_ENTITIES,
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

export const getProfessors = (page=1) => (dispatch) => {
    dispatch({
        type: ENTITIES_LOADING
    })

    // Todos los profesores
    axios.get(`${process.env.REACT_APP_API_URL}/api/profesores/?page=${page}`)
    .then(res => {
        dispatch({
            type: GET_ENTITIES,
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

export const clearEntities = () => (dispatch) => {
    dispatch({
        type: CLEAR_ENTITIES
    })
}