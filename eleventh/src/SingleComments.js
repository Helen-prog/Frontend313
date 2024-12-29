import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentUpdate, commentDelete } from "./redux/action";

function SingleComment({ data }) {
    const [commentText, setCommentText] = useState("");
    const { text, id } = data;
    const dispatch = useDispatch();

    console.log(data);
    

    useEffect(() => {
        if(text){
            setCommentText(text);
        }
    }, [text]);

    const handlerUpdate = (e) => {
        e.preventDefault();
        dispatch(commentUpdate(commentText, id));
    }

    const handleInput = (e) => {
        setCommentText(e.target.value);
    }

    const handleDelete = () => {        
        dispatch(commentDelete(id));
    }

    return (
        <form onSubmit={handlerUpdate} className="comments-item">
            <div onClick={handleDelete} class="comments-item-delete">&times;</div>
            <input type="text" value={commentText} onChange={handleInput} />
            <input type="submit" hidden />
        </form>
    )
}

export default SingleComment;