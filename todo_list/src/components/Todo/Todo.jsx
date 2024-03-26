// Todo.js

import { useState } from "react";
import "./Todo.css";

function Todo({todoData,isFinished,changeFinished,onDelete,onEdit}){
    const [finished,setFinished] = useState(isFinished);
    const [isEditing,setisEditing] = useState(false);
    const [editText,setEditText] = useState(todoData);

    return (
        <div className="todo-container">
            <input type="checkbox" onChange={e => changeFinished(e.target.checked)}/>
            {(isEditing) ? 
                <input className="todo-input" type='text' onChange={e => setEditText(e.target.value)} /> : 
                <span className="todo-text">{todoData}</span> 
            }
            <div className="todo-buttons">
                <button onClick={() => {
                    setisEditing(!isEditing);
                    onEdit(editText);
                }}> {(!isEditing) ? "Edit": "Save"} </button>
                <button onClick={onDelete}> Delete </button>
            </div>
        </div>
    );
}

export default Todo;
