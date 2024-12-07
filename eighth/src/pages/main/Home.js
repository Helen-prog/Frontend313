import { useEffect, useState } from "react";
import {getAllCategories} from '../../api';
import Preloader from '../../components/preloader/Preloader';
import CategoryList from "../../components/categoryList/CategoryList";

function Home(){
    const [catalog, setCatlog] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => {
            setCatlog(data.categories);
        })
    }, []);

    return (
        <div className="wrap">
            {
                !catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />
            }
        </div>
    )
}

export default Home;