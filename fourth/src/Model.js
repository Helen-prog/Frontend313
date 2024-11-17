import { useState } from "react";
import './Model.css';

function Model(){
    let [open, setOpen] = useState(false);  // open = false
    let image = "https://images.unsplash.com/photo-1698700237106-005e55484241?w=500&auto=format&fit=crop&q=60&ixlib=rb-";

    return(
        <div>
            <img src={image} alt="" 
                className="small" 
                style={{display: open ? "none" : "block"}}
                onClick={() => setOpen(true)} />
            {open && (<div>
                <img src={image} alt="" className="big" onClick={() => setOpen(false)}  />
            </div>)}
        </div>
    )
}

export default Model;