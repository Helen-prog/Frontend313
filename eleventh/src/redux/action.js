import { INCREMENT, DECREMENT, INPUT_TEXT, COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE, COMMENTS_LOAD } from "./type";

export function incrementLikes() {
    return {
        type: INCREMENT
    }
}

export function decrementLikes() {
    return {
        type: DECREMENT
    }
}

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text  // text: text 
    }
}

export function commentCreate(text, id){
    return {
        type: COMMENT_CREATE,
        data: {text, id}  // {text: text, id: id}  // data - исправить
    }
}

export function commentUpdate(text, id){
    return {
        type: COMMENT_UPDATE,
        data: {text, id}
    }
}

export function commentDelete(id){
    return {
        type: COMMENT_DELETE,
        id  // {id: id}
    }
}

export function commentsLoad(){
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
        const jsonData = await response.json();
        dispatch({
            type: COMMENTS_LOAD,
            data: jsonData
        })
    }
}