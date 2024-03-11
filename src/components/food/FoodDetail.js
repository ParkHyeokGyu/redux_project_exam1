import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchDetail} from "../../actions/foodActions";

function FoodDetail() {
    const {fno}=useParams()
    const nav=useNavigate()
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchDetail(fno))
    }, []);

    const food_detail=useSelector((state)=>state.foods.food_detail)

    return (
        <div className={"row"}>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td className={"text-center"} colSpan={2}>
                        <img src={'https://www.menupan.com' + food_detail.poster} style={{"width": "400px","height":"400px"}}/>
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"} width={"20%"}>업체명</td>
                    <td width={"80%"}>{food_detail.name}</td>
                </tr>
                <tr>
                    <td className={"text-center"} width={"20%"}>주소</td>
                    <td width={"80%"}>{food_detail.address}</td>
                </tr>
                <tr>
                    <td className={"text-center"} width={"20%"}>전화</td>
                    <td width={"80%"}>{food_detail.phone}</td>
                </tr>
                <tr>
                    <td className={"text-center"} width={"20%"}>음식종류</td>
                    <td width={"80%"}>{food_detail.type}</td>
                </tr>
                <tr>
                    <td className={"text-center"} width={"20%"}>영업시간</td>
                    <td width={"80%"}>{food_detail.time}</td>
                </tr>
                <tr>
                    <td className={"text-center"} width={"20%"}>테마</td>
                    <td width={"80%"}>{food_detail.theme}</td>
                </tr>
                <tr>
                    <td className={"text-right"} colSpan={2}>
                        <button className={"btn btn-sm btn-danger"} onClick={()=>nav(-1)}>목록</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FoodDetail