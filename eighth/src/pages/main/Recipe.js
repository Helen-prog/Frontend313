import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Preloader from "../../components/preloader/Preloader";
import { getMealById } from "../../api";
import "./Recipe.css";

function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});

    const navigate = useNavigate();
    let goBack = () => navigate(-1);

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]))
    }, [id])

    return (
        <div className="wrap">
            {
                !recipe.idMeal ? (<Preloader />) : <div className="recipe">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1>{recipe.strMeal}</h1>
                    <div>Category: <h5>{recipe.strCategory}</h5></div>
                    {recipe.strArea ? <div>Area: <h5>{recipe.strArea}</h5></div> : null}
                    <p>{recipe.strInstructions}</p>

                    <table className="table">
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                        {
                            Object.keys(recipe).map(key => {
                                if (key.includes('Ingredient') && recipe[key]) {
                                    return (
                                        <tr>
                                            <td>{recipe[key]}</td>
                                            <td>{
                                                recipe[`strMeasure${key.slice(13)}`]
                                            }</td>
                                        </tr>
                                    )
                                }
                                return null;
                            })
                        }
                    </table>

                    {
                        recipe.strYoutube ? (<div>
                            <h4>Video Recipe</h4>
                            <div className="video-wrap">
                                <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} frameborder="0" allowfullscreen ></iframe>
                            </div>
                        </div>) : null
                    }

                </div>
            }
            <button className="btn" onClick={goBack}>Go Back</button>
        </div>
    )
}

export default Recipe;