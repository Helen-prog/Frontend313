import {Link} from 'react-router-dom';
import './CategoryItem.css';

function CategoryItem({
    idCategory, 
    strCategory,
    strCategoryThumb,
    strCategoryDescription
}){
    return (
        <div className="card">
            <img src={strCategoryThumb} alt={strCategory} />
            <h2>{strCategory}</h2>
            <p>{strCategoryDescription.slice(0, 76)}...</p>

            <div className="card-action">
                <Link to={`/category/${strCategory}`}>Watch category</Link>
            </div>
        </div>
    )
}

export default CategoryItem;