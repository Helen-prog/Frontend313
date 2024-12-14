import React, { useState } from 'react';

function EventExample(){
    const [value, setValue] = useState<string>("");

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    }

    

    return (
        <div>
            <input 
                type="text" 
                value={value}
                onChange={changeHandler}
            />
            <button onClick={clickHandler}>Button</button>
        </div>
    )
}

export default EventExample;