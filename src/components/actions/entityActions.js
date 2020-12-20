import {ENTITIES_LOADING, GET_ENTITIES, CLEAR_ENTITIES, GET_ERRORS} from './types'
import axios from 'axios'


export const getEntitiesOfEntity = (entity, id, entities) => (dispatch) => {
    dispatch({
        type: ENTITIES_LOADING
    })

    // universidades => schools, professors
    // escuelas => professors
    axios.get(`http://localhost:8000/api/${entity}/${id}/${entities}`)
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

export const getLastAdded = () => (dispatch) => {
    dispatch({
        type: ENTITIES_LOADING
    })

    // Ultimas escuelas agregadas
    axios.get(`http://localhost:8000/api/escuelas/last_added/`)
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

export const getInstitutions = () => (dispatch) => {
    dispatch({
        type: ENTITIES_LOADING
    })

    // Todas las universidades
    axios.get(`http://localhost:8000/api/universidades/`)
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

export const getProfessors = () => (dispatch) => {
    dispatch({
        type: ENTITIES_LOADING
    })

    // Todos los profesores
    axios.get(`http://localhost:8000/api/profesores/`)
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