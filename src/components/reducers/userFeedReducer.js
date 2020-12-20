import {GET_UNIVERSITY_OPTIONS, GET_SCHOOL_OPTIONS, SET_UNIVERSITY, SET_SCHOOL, CLEAR_OPTIONS} from '../actions/types'

const initialState = {
    universityOptions: [],
    schoolOptions: [],
    universitySelected: null,
    university: null,
    school: null
};

export const userFeedReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_UNIVERSITY_OPTIONS:
            return {
                ...state,
                universityOptions: action.payload
            }
        case GET_SCHOOL_OPTIONS:
            return {
                ...state,
                schoolOptions: action.payload
            }
        case SET_UNIVERSITY:
            return {
                ...state,
                university: action.payload,
                universitySelected: true
            }
        case SET_SCHOOL:
            return {
                ...state,
                school: action.payload
            }
        case CLEAR_OPTIONS:
            return {
                ...state,
                universityOptions: [],
                schoolOptions: [],
                universitySelected: null,
                university: null,
                school: null
            }
        default:
            return state
    }
}