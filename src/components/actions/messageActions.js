import {GET_MESSAGES, CLEAR_MESSAGES} from './types'


export const addMessage = (message) => (dispatch) => {
    dispatch({
        type: GET_MESSAGES,
        payload: message
    })
}

export const clearMessages = () => (dispatch) => {
 dispatch({
     type:CLEAR_MESSAGES
 })
}