import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/action";

function Title(){

    const dispatch = useDispatch();
    const text = useSelector(state => {
        const {inputReducer} = state;
        return inputReducer.text;
    })

    const handleChange = (e) => {
        console.log("handle text =>", e.target.value);   
        dispatch(inputText(e.target.value));
    }

    return (
        <div className="card-title">
            <div className="card-title-top">
                <input 
                    type="text"
                    placeholder="Название изображения"
                    onChange={handleChange}
                    />
            </div>
            <p className="top">{text}</p>
        </div>
    )
}

export default Title;