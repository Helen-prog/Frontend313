import ImageGallery from 'react-image-gallery';
import { useState } from 'react';
import data from './data.json';
import './App.css';

function App(){
    const collections = data.collections;
    const cats = data.categories;
    const [searchValue, setSearchValue] = useState("");
    const [categoryId, setCategoryId] = useState(0);
    
    return (
        <div>
            <h1>Моя коллекция фотографий</h1>

            <div className="top">
                <ul className="tags">
                    {
                        cats.map((obj, index) => (
                            <li
                                className={categoryId == index ? 'active' : ''}
                                key={index}
                                onClick={() => setCategoryId(index)}
                            >
                                {obj.name}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="search">
                <input type="text" className="search-input" placeholder='Поиск по назанию'
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)} />
            </div>

            <div className="image-gallery-wrapper">
                {
                    collections
                    .filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()) && (categoryId === obj.category || categoryId === 0))
                    .map((obj, index) => (
                        <div className="collection" key={index}>
                            <h2>{obj.name}</h2>
                            <ImageGallery items={obj.photos} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default App;