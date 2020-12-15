import {ADD_REVIEW, EDIT_REVIEW, GET_ERRORS, REVIEW_FORM_CLOSE, CLEAR_REVIEW_BY_USER} from './types'
import {tokenConfig} from './authActions'
import axios from 'axios'

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

    // Petición HTTP a la API para publicar reseña con el usuario del token 
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
     })
     .catch( e => {
         const errors = {message: e.response.data, status: e.response.status}
         dispatch( {
             type: GET_ERRORS,
             payload: errors
         })
     })
}

export const formWillClose = () => (dispatch) => {
    dispatch({
        type: REVIEW_FORM_CLOSE
    })
}