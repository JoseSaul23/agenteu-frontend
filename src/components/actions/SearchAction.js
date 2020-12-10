import {FETCH_RESULTS} from './types'

export const FetchResults = (query) => (dispatch) => {
    fetch("http://localhost:8000/profesores/?search=" + query)
    .then( res => res.json())
    .then( results => {
        return dispatch( {type: FETCH_RESULTS, payload: results } )
    })
}