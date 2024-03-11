import {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFindList, fetchFindPage} from "../../actions/foodActions";
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";

/*
    1. React(View)에서 dispatch로 action의 함수 호출
    2. action에서 서버와 통신하여 값을 가져와 dispatch로 reducer로 데이터를 넘긴다
    3. reducer에서는 action인자값으로 넘어온 값을 판별하여 store에 저장
 */

function FoodFind() {
    const [fd,setFd]=useState('마포')
    const [curpage,setCurpage]=useState(1)
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchFindList(fd,curpage))
        dispatch(fetchFindPage(fd))
    }, [fd,curpage]);

    const find_list=useSelector((state)=>state.foods.find_list)
    const find_page=useSelector((state)=>state.foods.find_page)

    const handlePageChange=(page)=>{
        setCurpage(page)
    }
    const findChange=(e)=>{
        setCurpage(1)
        setFd(e.target.value)
    }

    let html=find_list.map((food) =>
        <div className="col-md-4">
            <div className="thumbnail">
                <Link to={"/food/food_detail/" + food.fno}>
                    <img src={'https://www.menupan.com' + food.poster} style={{"width": "100%"}}/>
                    <div className="caption">
                        <p>{food.name}</p>
                    </div>
                </Link>
            </div>
        </div>
    )

    return (
        <Fragment>
            <div className={"row"}>
                <input type="text" size={20} className={"input-sm"} value={fd} onChange={findChange}/>
                <input type="button" value="검색" className={"btn btn-sm btn-primary"}/>
            </div>
            <div style={{"height": "10px"}}></div>
            <div className={"row"}>{html}</div>
            <div className={"row"}>
            <div className={"text-center"}>
                <Pagination
                    activePage={curpage}
                    itemsCountPerPage={12}
                    totalItemsCount={find_page}
                    pageRangeDisplayed={10}
                    prevPageText={"<"}
                    nextPageText={">"}
                    onChange={handlePageChange}
                />
            </div>
            </div>
        </Fragment>
    )
}
export default FoodFind