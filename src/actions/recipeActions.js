import axios from "axios";
import {
    FETCH_RECIPE_COUNT,
    FETCH_RECIPE_DETAIL,
    FETCH_RECIPE_LIST, FETCH_RECIPE_MAKES,
    FETCH_RECIPE_PAGE,
    FETCH_RECIPE_POSTERS
} from "./types";

export const fetchRecipeList=(page)=>dispatch=>{
    axios.get('http://localhost/recipe/list_react',{
        params:{
            page:page
        }
    }).then(response=>dispatch({
        type:FETCH_RECIPE_LIST,
        payload:response.data
    }))
}
export const fetchRecipeCount=()=>dispatch=>{
    axios.get('http://localhost/recipe/count_react').then(response=>dispatch({
        type:FETCH_RECIPE_COUNT,
        payload:response.data
    }))
}
export  const fetchRecipePage=()=>dispatch=>{
    axios.get('http://localhost/recipe/page_react').then(response=>dispatch({
        type:FETCH_RECIPE_PAGE,
        payload:response.data
    }))
}
export const fetchRecipeDetail=(no)=>dispatch=>{
    axios.get('http://localhost/recipe/detail_react',{
        params:{
            no:no
        }
    }).then(response=>dispatch({
        type:FETCH_RECIPE_DETAIL,
        payload:response.data
    }))
}
export const fetchRecipePosters=(no)=>dispatch=>{
    axios.get('http://localhost/recipe/image_react',{
        params:{
            no:no
        }
    }).then(response=>dispatch({
        type:FETCH_RECIPE_POSTERS,
        payload:response.data
    }))
}
export const fetchRecipeMakes=(no)=>dispatch=>{
    axios.get('http://localhost/recipe/make_react',{
        params:{
            no:no
        }
    }).then(response=>dispatch({
        type:FETCH_RECIPE_MAKES,
        payload:response.data
    }))
}