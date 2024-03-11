import {FETCH_FOOD_LIST, FETCH_FOOD_DETAIL, FETCH_PAGE, FETCH_FIND_LIST, FETCH_FIND_PAGE} from "./types";
import axios from "axios";

/*
                   요청 dispatch              dispatch
    component(React:View(JSP,HTML)) -> action(함수) -> Reducer(처리,갱신) -> store(최종 결과값 저장)
                                                                             |
                                                                           React에서 호출
    Front-End(MVC)
    1) React = JSP
    2) store = DispatcherServlet -> 데이터 송수신 역할
    3) action = RequestMapping -> 사용자가 요청한 내용에 대한 구분자
    4) reducer = Model -> 데이터 관리(요청한 데이터 읽기 및 쓰기)
    5) state = request

        요청(.do)
    JSP -------- DispatchServlet -------- @RequestMapping(Model) -------- DAO -------- request
    React -------- store -------- action -------- reducer -------- store
    React -> 이벤트 발생 -> action({type,payload}) -> reducer -> store
    reducer에서 state 갱신 -> re-rendering -> 화면 변경

    React(View) : 화면 출력 ===> View
    --------------------------------
    action : 요청 사항을 받는다
    reducer : 요청 사항 처리 -> 데이터 갱신
                          ===> Model
    --------------------------------
    store : 처리된 데이터 저장
                          ===> Controller

    나누어 개발하는 이유(분산)
    1) 여러명이 동시에 개발
    2) 유지보수

    퍼블리셔 : HTML,CSS -> 화면 제작
    Front-End : JavaScript(NodeJS/VueJS/Jquery/ReactJS/NextJS)
    Back-End : Database(Oracle,MySQL)/JSP/JAVA/Spring/Spring-Boot

 */
/*
    @RequestMapping("list.do") -> types 설정
    public String list() { -> actions 구현
        구현
    }
 */
export const fetchFoodList=(page)=>dispatch=>{
    axios.get('http://localhost/food/list_react',{
        params:{
            page:page
        }
    }).then(response=>dispatch({
        type:FETCH_FOOD_LIST,
        payload:response.data
    }))
}
export const fetchPage=()=>dispatch=>{
    axios.get('http://localhost/food/food_totalpage_react').then((response)=>dispatch({
        type:FETCH_PAGE,
        payload:response.data
    }))
}
export const fetchDetail=(fno)=>dispatch=>{
    axios.get('http://localhost/food/food_detail_react',{
        params:{
            fno:fno
        }
    }).then((response)=>dispatch({
        type:FETCH_FOOD_DETAIL,
        payload:response.data
    }))
}
export const fetchFindList=(fd,page)=>dispatch=>{
    axios.get('http://localhost/food/find_react',{
        params:{
            address:fd,
            page:page
        }
    }).then(response=>dispatch({
        type:FETCH_FIND_LIST,
        payload:response.data
    }))
}
export const fetchFindPage=(fd)=>dispatch=>{
    axios.get('http://localhost/food/find_totalpage_react',{
        params:{
            address:fd
        }
    }).then(response=>dispatch({
        type:FETCH_FIND_PAGE,
        payload:response.data
    }))
}