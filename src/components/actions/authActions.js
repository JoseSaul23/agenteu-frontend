import axios from 'axios'
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    GET_ERRORS,
    CLEAR_ERRORS
} from './types'


// Obtener datos de usuario.
export const getUser = () => (dispatch, getState) => {
    // Cargando usuario.
    dispatch({ type: USER_LOADING });

    const config = tokenConfig(getState);

    // Petición HTTP a la API para obtener token del usuario. 
    axios.get('http://localhost:8000/auth/users/me/', config)
        .then( res => {
            dispatch({ 
                type: USER_LOADED, 
                payload: res.data
            });
        })
        .catch( e => {
            dispatch({ type: AUTH_ERROR })
        })
}

// Iniciar Sesión
export const login = (email, password) => (dispatch) => {
    // Cargando usuario.
    dispatch({ type: USER_LOADING });

    // Headers de la peticion HTTP.
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    } 

    // Cuerpo de la peticion HTTP.
    const body = JSON.stringify({ email, password })

    // Petición HTTP a la API para obtener token del usuario. 
    axios.post('http://localhost:8000/auth/token/login/', body, config)
        .then( res => {
            dispatch({ 
                type: LOGIN_SUCCESS, 
                payload: res.data
            });
            dispatch(getUser())
        })
        .catch( e => {
            const errors = {message: e.response.data, status: e.response.status}
            dispatch( {
                type: GET_ERRORS,
                payload: errors
            })
            dispatch({ type: LOGIN_FAIL })
        })
}

// Cerrar sesión
export const logout = () => (dispatch, getState) => {

    const config = tokenConfig(getState);

    // Petición HTTP a la API para obtener token del usuario. 
    axios.post('http://localhost:8000/auth/token/logout/', null, config)
        .then( () => {
            dispatch({ 
                type: LOGOUT_SUCCESS
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

// Registrar usuario.
export const register = ({username, email, password}) => (dispatch) => {
    // Cargando usuario.
    dispatch({ type: USER_LOADING });

    // Headers de la peticion HTTP.
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    } 

    // Cuerpo de la peticion HTTP.
    const body = JSON.stringify({ username, email, password })

    // Petición HTTP a la API para obtener token del usuario. 
    axios.post('http://localhost:8000/auth/users/', body, config)
        .then( res => {
            dispatch({ 
                type: REGISTER_SUCCESS, 
                payload: res.data
            });
        })
        .catch( e => {
            const errors = {message: e.response.data, status: e.response.status}
            dispatch( {
                type: GET_ERRORS,
                payload: errors
            })
            dispatch({ type: REGISTER_FAIL })
        })
}

export const updateUser = (fields) => (dispatch, getState) => {
    // Petición HTTP a la API para modificar campos del usuario. 
    axios.put('http://localhost:8000/auth/users/me/', fields, tokenConfig(getState))
        .then( res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
            dispatch({
                type: CLEAR_ERRORS,
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

export const updatePassword = (current_password, new_password) => (dispatch, getState) => {
    // Petición HTTP a la API para cambiar contraseña 
    axios.post('http://localhost:8000/auth/users/set_password/', {current_password, new_password}, tokenConfig(getState))
    .then( res => {
        dispatch(getUser());
        dispatch({
            type: CLEAR_ERRORS,
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

export const updateEmail = (new_email, current_password) => (dispatch, getState) => {
        // Petición HTTP a la API para cambiar correo 
        axios.post('http://localhost:8000/auth/users/set_email/', {new_email, current_password}, tokenConfig(getState))
        .then( res => {
            dispatch(getUser());
            dispatch({
                type: CLEAR_ERRORS,
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

export const tokenConfig = (getState) => {

    // Obtener token de localStorage.
    const token = getState().auth.auth_token;

    // Headers de la peticion HTTP
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    } 

    // Verificar que existe el token y agregarlo al header.
    if (token) {
        config.headers['Authorization'] = 'Token ' + token;
    } 

    return config;

}