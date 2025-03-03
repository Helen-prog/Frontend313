import React from "react";

import { ITodo } from "../types/types.tsx";

const check = () => console.log("Checked");

function TodoItem({todo}: {todo: ITodo}){
    return (
        <div>
            <input type="checkbox" checked={todo.completed} onChange={check} />
            {todo.id}. {todo.title}
        </div>
    )
}

export default TodoItem;