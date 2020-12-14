import {ADD_REVIEW, GET_ERRORS} from './types'
import {tokenConfig} from './authActions'
import axios from 'axios'

export const addReview = (review) => (dispatch, getState) => {

     // Petición HTTP a la API para publicar reseña con el usuario del token 
     axios.post('http://localhost:8000/api/publicaciones/', review, tokenConfig(getState))
     .then( res => {
         dispatch({ 
             type: ADD_REVIEW, 
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