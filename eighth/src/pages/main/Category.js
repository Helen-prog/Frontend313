import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {getFiltredCategory} from '../../api';
import MealList from "../../components/MealList";
import Preloader from "../../components/preloader/Preloader";
import "./Category.css";

function Category(){
    const {name} = useParams();
    const [meals, setMeals] = useState([]);

    const navigate = useNavigate();
    let goBack = () => navigate(-1);

    useEffect(()=> {
        getFiltredCategory(name).then(data => setMeals(data.meals))
    }, [name]);
   

    return (
        <div className="wrap">
            {
                !meals.length ? <Preloader /> : <MealList meals={meals} />
            }
            <button className="btn" onClick={goBack}>Go Back</button>
        </div>
    )
}

export default Category;