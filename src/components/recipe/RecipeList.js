import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect, useState} from "react";
import {fetchRecipeCount, fetchRecipeList, fetchRecipePage} from "../../actions/recipeActions";
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";

function RecipeList() {
    const dispatch=useDispatch()
    const [curpage,setCurpage]=useState(1)
    // reducer로 전송하여 state 갱신 -> 갱신된 state를 store에 저장
    useEffect(() => {
        dispatch(fetchRecipeList(curpage))
        dispatch(fetchRecipePage())
        dispatch(fetchRecipeCount())
    }, [curpage]);
    // store에 저장된 데이터 읽어오기
    const recipe_list=useSelector((state)=>state.recipes.recipe_list)
    const recipe_count=useSelector((state)=>state.recipes.recipe_count)
    const recipe_total=useSelector((state)=>state.recipes.recipe_total)

    const handlePageChage=(page)=>{
        setCurpage(page)
    }

    let html=recipe_list.map((recipe) =>
        <div className="col-md-4">
            <div className="thumbnail">
                <Link to={"/recipe/recipe_detail/"+recipe.no}>
                    <img src={recipe.poster} title={recipe.title} style={{"width": "100%"}}/>
                    <div className="caption">
                        <p>{recipe.chef}</p>
                    </div>
                </Link>
            </div>
        </div>
    )

    return (
        <Fragment>
            <div className={"row"}>
                <h3>총 {recipe_count.toLocaleString()}개의 맛있는 레시피가 있습니다.</h3>
            </div>
            <div style={{"height": "10px"}}>{html}</div>
            <div className={"row"}></div>
            <div style={{"height": "10px"}}></div>
            <div className={"row"}>
                <div className={"text-center"}>
                    <Pagination
                        activePage={curpage}
                        itemsCountPerPage={12}
                        totalItemsCount={recipe_total}
                        pageRangeDisplayed={10}
                        prevPageText={"<"}
                        nextPageText={">"}
                        onChange={handlePageChage}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default RecipeList