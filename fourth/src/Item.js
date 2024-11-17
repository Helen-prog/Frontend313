import { useState } from "react";

function Item(){
    let [item, setItem] = useState([]);

    function addItem(){
        setItem([
            ...item,
            {
                id: item.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])
    }

    console.log(item);
    
    return(
        <div>
            <button onClick={addItem}>Add a number</button>
            {
                item.map(i => (
                    <div key={i.id} style={{background: i.value % 2 === 0 ? "silver" : "yellow"}}>
                        {i.value}
                    </div>
                ))
            }
        </div>
    )
}

export default Item;