import {
    FETCH_RECIPE_COUNT,
    FETCH_RECIPE_DETAIL,
    FETCH_RECIPE_LIST, FETCH_RECIPE_MAKES,
    FETCH_RECIPE_PAGE,
    FETCH_RECIPE_POSTERS
} from "../actions/types";

const initialState={
    recipe_list:[],
    recipe_count:0,
    recipe_total:0,
    recipe_detail:{},
    recipe_posters:[],
    recipe_makes:[]
}

export default function (state=initialState,action) {
    switch (action.type) {
        case FETCH_RECIPE_LIST:
            return {
                ...state,
                recipe_list: action.payload
            }
        case FETCH_RECIPE_COUNT:
            return {
                ...state,
                recipe_count: action.payload
            }
        case FETCH_RECIPE_PAGE:
            return {
                ...state,
                recipe_total: action.payload
            }
        case FETCH_RECIPE_DETAIL:
            return {
                ...state,
                recipe_detail: action.payload
            }
        case FETCH_RECIPE_POSTERS:
            return {
                ...state,
                recipe_posters: action.payload
            }
        case FETCH_RECIPE_MAKES:
            return {
                ...state,
                recipe_makes: action.payload
            }
        default:
            return state
    }
}