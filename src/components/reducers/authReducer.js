import {
    REGISTER_SUCCESS,
    REGISTER_FAIL, 
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
} from '../actions/types'

const initialState = {
    auth_token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
};

export const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.auth_token)
            return {
                ...state,
                auth_token: action.payload.auth_token,
                isAuthenticated: true,
                isLoading: false
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                auth_token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
            }
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.auth_token)
            return {
                ...state,
                auth_token: action.payload.auth_token,
                user: action.payload.user,
                isAuthenticated: true,
                isLoading: false
            };  
        default:
            return state;
    }
}