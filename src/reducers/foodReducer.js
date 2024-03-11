import {FETCH_FOOD_LIST, FETCH_FOOD_DETAIL, FETCH_PAGE, FETCH_FIND_LIST, FETCH_FIND_PAGE} from "../actions/types";
/*
    board
    news
    goods
    food
    recipe
 */
const initialState={
    food_list:[],
    food_detail:{},
    total:0,
    find_list:[],
    find_page:0
}
/*
    let arr=[1,2,3,4,5]
    let k=...arr -> arr copy
 */
export default function (state=initialState,action){
    console.log("reducer function call... action(전송된 값) : "+action)
    switch (action.type) {
        case FETCH_FOOD_LIST:
            return {
                ...state, // 기존의 데이터를 저장 -> 저장하지 않을 시 초기화
                food_list: action.payload // state 갱신
            }
        case FETCH_FOOD_DETAIL:
            return {
                ...state,
                food_detail: action.payload
            }
        case FETCH_PAGE:
            return {
                ...state,
                total: action.payload
            }
        case FETCH_FIND_LIST:
            return {
                ...state,
                find_list: action.payload
            }
        case FETCH_FIND_PAGE:
            return {
                ...state,
                find_page: action.payload
            }
        default:
            return state
    }
}