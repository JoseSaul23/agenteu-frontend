import {
    GET_REVIEWS,
    LOADING_REVIEWS,
    GET_REVIEW,
    LOADING_REVIEW,
    ADD_REVIEW,
    EDIT_REVIEW,
    REVIEW_FORM_CLOSE,
    DELETE_REVIEW,
    RECOMMEND_REVIEW,
    SAVE_REVIEW,
    REPORT_REVIEW,
    CLEAR_REVIEWS,
    CLEAR_REVIEW
} from '../actions/types'

const initialState = {
    reviews: [],
    page: 0,
    nextPage: null,
    review: {},
    isLoading: null,
    areLoading: null,
    loadingMore: false,
    wasAdded: null,
    wasDeleted: false,
}

export const reviewReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOADING_REVIEWS:
            return {
                ...state,
                areLoading: state.page === 0 ? true : false,
                loadingMore: state.page > 0 ? true : false
            }
        case GET_REVIEWS:
            return {
                ...state,
                reviews: [...state.reviews, ...action.payload.results],
                page: state.page + 1,
                nextPage: action.payload.next,
                areLoading: false,
                loadingMore: false
            }
        case LOADING_REVIEW:
            return {
                ...state,
                isLoading: true
            }
        case GET_REVIEW:
            return {
                ...state,
                review: action.payload,
                isLoading: false
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
                reviews: state.reviews.filter(review => review.id !== action.payload),
                wasDeleted: state.review.id === action.payload ? true : state.wasDeleted,
                review: state.review.id === action.payload ? {} : state.review,
            }
        case SAVE_REVIEW:
        case RECOMMEND_REVIEW:
            return {
                ...state,
                reviews: state.reviews.map( (review) => review.id === action.payload.id ?
                    // Se transforma la reseña con el id recibido
                    { 
                        ...review,
                        recomendations: action.payload.recomendations,
                        favorite: action.payload.favorite,
                        recomendations_count: action.payload.recomendations_count } : 
                    // la que no sean igual, se regresan igual
                    review
                ),
                review: state.review.id === action.payload.id ? action.payload : state.review
            }
        case REPORT_REVIEW:
            return {
                ...state
            }
        case CLEAR_REVIEWS:
            return {
                ...state,
                reviews: [],
                page: 0,
                nextPage: null
            }
        case CLEAR_REVIEW:
            return {
                ...state,
                review: {},
                wasDeleted: false
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