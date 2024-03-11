import axios from "axios";
import {FETCH_GOODS_LIST} from "./types";

export const fetchGoodsList=(page,type)=>{
    axios.get('http://localhost/goods/list_react',{
        params:{
            page:page,
            type:type
        }
    }).then(response=>{
        const action={
            type:FETCH_GOODS_LIST,
            payload:response.data
        }
        dispatch(action)
    })
}