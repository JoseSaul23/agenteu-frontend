import {
    GET_REVIEWS,
    GET_REVIEW,
    ADD_REVIEW,
    EDIT_REVIEW,
    REVIEW_FORM_CLOSE,
    DELETE_REVIEW,
    RECOMMEND_REVIEW,
    SAVE_REVIEW,
    CLEAR_REVIEWS,
    CLEAR_REVIEW
} from '../actions/types'

const initialState = {
    reviews: [],
    review: {},
    wasAdded: null
}

export const reviewReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_REVIEWS:
            return {
                ...state,
                reviews: action.payload
            }
        case GET_REVIEW:
            return {
                ...state,
                review: action.payload
            }
        case ADD_REVIEW:
        case EDIT_REVIEW:
            return {
                ...state,
                wasAdded: true
            }
        case DELETE_REVIEW:
            //CUANDO SE ELIMINA, MODIFICAR LOS DETALLES DE ENTIDAD PARA CAMBIAR CANTIDAD DE RESEÑAS,
            // SI ES QUE SE TIENE UNA ENIDAD CARGADA.  EN ENITY REDUCER -- REVIEW_DELETED
            return {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.payload)
            }
        case SAVE_REVIEW:
        case RECOMMEND_REVIEW:
            return {
                ...state,
                reviews: state.reviews.map( (review) => review.id === action.payload.id ?
                    // Se transforma la reseña con el id recibido
                    { ...review, recomendations_count: action.payload.recomendations_count } : 
                    // Si no, se regresa la original
                    review
                )
            }
        case CLEAR_REVIEWS:
            return {
                ...state,
                reviews: []
            }
        case CLEAR_REVIEW:
            return {
                ...state,
                review: {}
            }
        case REVIEW_FORM_CLOSE:
            return {
                ...state,
                wasAdded: null
            }
        default:
            return state
    }
}