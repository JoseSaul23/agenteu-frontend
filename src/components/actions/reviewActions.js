import {
    GET_REVIEWS,
    GET_REVIEW,
    ADD_REVIEW,
    EDIT_REVIEW,
    DELETE_REVIEW,
    RECOMMEND_REVIEW,
    CLEAR_REVIEWS,
    CLEAR_REVIEW,
    GET_ERRORS,
    REVIEW_FORM_CLOSE,
    CLEAR_REVIEW_BY_USER} from './types'
import {tokenConfig} from './authActions'
import axios from 'axios'


// Obtener las reseñas que pertenecen a una entidad
export const getEntityReviews = (entity, id) => (dispatch) => {
    axios.get(`http://localhost:8000/api/${entity}/${id}/reviews/`)
    .then(res => {
        dispatch({
            type: GET_REVIEWS,
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

// Obtener las reseñas que pertenecen a un usuario
// (reseñas propias, favoritas o recomendadas)
export const getUserReviews = (review_type) => (dispatch, getState) => {
    axios.get(`http://localhost:8000/auth/users/${review_type}/`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_REVIEWS,
            payload: res.data
        })
    })
    .catch(e => {
        const errors = {message: e.response.data, status: e.response.status}
        dispatch( {
            type: GET_ERRORS,
            payload: errors
        })
        // dispatch para clear reviews???
    }) 
}

// Obtener solo una reseña
export const getReview = (id) => (dispatch) => {

        // Petición HTTP a la API para obtener reseña
        axios.get(`http://localhost:8000/api/publicaciones/${id}/`)
        .then( res => {
            dispatch({
                type: GET_REVIEW,
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

export const addReview = (review) => (dispatch, getState) => {

     // Petición HTTP a la API para publicar reseña con el usuario del token 
     axios.post('http://localhost:8000/api/publicaciones/', review, tokenConfig(getState))
     .then( res => {
         dispatch({ 
             type: ADD_REVIEW,
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

export const editReview = (id, review) => (dispatch, getState) => {

    // Petición HTTP a la API para editar reseña con el usuario del token 
    axios.put(`http://localhost:8000/api/publicaciones/${id}/`, review, tokenConfig(getState))
    .then( res => {
        dispatch({ 
            type: EDIT_REVIEW,
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

export const deleteReview = (id) => (dispatch, getState) => {
     // Petición HTTP a la API para publicar reseña con el usuario del token 
     axios.delete(`http://localhost:8000/api/publicaciones/${id}/`, tokenConfig(getState))
     .then( res => {
         dispatch({ 
             type: CLEAR_REVIEW_BY_USER,
         });
         dispatch({ 
            type: DELETE_REVIEW,
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

export const recommendReview = (id) => (dispatch, getState) => {
    // Petición HTTP a la API para dar recomendacion a reseña. 
    axios.get(`http://localhost:8000/api/publicaciones/${id}/recommend/`, tokenConfig(getState))
    .then( res => {
        dispatch({ 
            type: RECOMMEND_REVIEW,
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

export const clearReviews = () => (dispatch) => {
    dispatch({
        type: CLEAR_REVIEWS
    })
}

export const clearReview = () => (dispatch) => {
    dispatch({
        type: CLEAR_REVIEW
    })
}

// Despues de cerrar el formulario de creacion o edicion
// se devuelve la variable de wasAdded al estado inicial
export const formWillClose = () => (dispatch) => {
    dispatch({
        type: REVIEW_FORM_CLOSE
    })
}