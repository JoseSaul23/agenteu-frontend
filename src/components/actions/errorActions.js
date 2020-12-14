import {CLEAR_ERRORS} from './types'

// Limpieza de errores

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}