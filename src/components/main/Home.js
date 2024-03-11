import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect, useState} from "react";
import {fetchFoodList, fetchPage} from "../../actions/foodActions";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

function Home() {
    const dispatch=useDispatch()
    const [curpage,setCurpage]=useState(1)

    useEffect(() => {
        dispatch(fetchFoodList(1))
        dispatch(fetchPage())
    }, [curpage]);

    // store에서 데이터 얻기
    const food_list=useSelector((state)=>state.foods.food_list)
    const total=useSelector((state)=>state.foods.total)
    const handlePageChange=(page)=>{
        setCurpage(page)
    }
    const html=food_list.map((food)=>
        <div className="col-md-4">
            <div className="thumbnail">
                <Link to={"/food/food_detail/"+food.fno}>
                    <img src={'https://www.menupan.com'+food.poster} style={{"width":"100%"}}/>
                    <div className="caption">
                        <p>{food.name}</p>
                    </div>
                </Link>
            </div>
        </div>
    )

    return (
        <Fragment>
            <div className={"row"}>{html}</div>
            <div style={{"height":"20px"}}></div>
            <div className={"text-center"}>
                <Pagination
                    activePage={curpage}
                    itemsCountPerPage={12}
                    totalItemsCount={total}
                    pageRangeDisplayed={10}
                    prevPageText={"<"}
                    nextPageText={">"}
                    onChange={handlePageChange}
                />
            </div>
        </Fragment>
    )
}
export default Home