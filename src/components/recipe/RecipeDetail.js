import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchRecipeDetail, fetchRecipeMakes, fetchRecipePosters} from "../../actions/recipeActions";

function RecipeDetail() {
    const {no}=useParams()
    const nav=useNavigate()
    // useDispatch -> action 함수 호출
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchRecipeDetail(no))
        dispatch(fetchRecipePosters(no))
        dispatch(fetchRecipeMakes(no))
    }, []);
    // useSelector -> store 데이터들 선택해서 가지고 온다
    const recipe_detail=useSelector((state)=>state.recipes.recipe_detail)
    const recipe_posters=useSelector((state)=>state.recipes.recipe_posters)
    const recipe_makes=useSelector((state)=>state.recipes.recipe_makes)

    const recipe_data=recipe_detail

    console.log(recipe_detail)

    let html=recipe_makes.map((m,index)=>
        <tr>
            <td className={"text-left"}>{m}</td>
            <td className={"text-right"}>
                <img src={recipe_posters[index]} style={{"width":"80px","height":"80px"}}/>
            </td>
        </tr>
    )

    return (
        <div className={"row"}>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td className={"text-center"} colSpan={3}>
                        <img src={recipe_data.poster} style={{"width": "400px", "height": "400px"}}/>
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"} colSpan={3}>
                        <h3 className={"text-center"}>{recipe_data.title}</h3>
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"} colSpan={3}>
                        {recipe_data.content}
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"}><img src={"http://localhost:3000/icon/a3.png"}/></td>
                    <td className={"text-center"}><img src={"http://localhost:3000/icon/a1.png"}/></td>
                    <td className={"text-center"}><img src={"http://localhost:3000/icon/a2.png"}/></td>
                </tr>
                <tr>
                    <td className={"text-center"}>{recipe_data.info1}</td>
                    <td className={"text-center"}>{recipe_data.info2}</td>
                    <td className={"text-center"}>{recipe_data.info3}</td>
                </tr>
                </tbody>
            </table>
            <table className={"table"}>
                <caption><h3>조리 방법</h3></caption>
                <tbody>{html}</tbody>
            </table>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td className={"text-center"} rowSpan={2}>
                        <img src={recipe_data.chef_poster} style={{"width":"150px","height":"150px"}}/>
                    </td>
                    <td>{recipe_data.chef}</td>
                </tr>
                <tr>
                    <td>{recipe_data.chef_profile}</td>
                </tr>
                <tr>
                    <td className={"text-right"} colSpan={2}>
                        <button className={"btn btn-sm btn-warning"} onClick={()=>nav(-1)}>목록</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RecipeDetail