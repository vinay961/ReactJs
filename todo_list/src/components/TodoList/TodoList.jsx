// TodoList.js

import TodoContext from "../../TodoContext/TodoContext";
import { useContext } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css"; // Import CSS file

function TodoList() {
    const {todoList,setlist} = useContext(TodoContext);

    return (
        <div className="todo-list-container"> {/* Apply the container class */}
            {todoList.length > 0 && 
                todoList.map(todo => (
                    <div className="todo-list-item" key={todo.id}> {/* Apply the item class */}
                        <Todo
                            id={todo.id}
                            isFinished={todo.finished}
                            todoData={todo.todoData}
                            changeFinished={(isFinished) => {
                                const updatedList = todoList.map(t => {
                                    if (t.id === todo.id) {
                                        t.finished = isFinished;
                                    }
                                    return t;
                                });
                                setlist(updatedList);
                            }}
                            onDelete={() => {
                                const updatedList = todoList.filter(t => t.id !== todo.id);
                                setlist(updatedList);
                            }}
                            onEdit={(todoText) => {
                                const updatedList = todoList.map(t => {
                                    if (t.id === todo.id) {
                                        t.todoData = todoText;
                                    }
                                    return t;
                                });
                                setlist(updatedList);
                            }}
                        />
                    </div>
                ))
            }
        </div>
    );
}

export default TodoList;
