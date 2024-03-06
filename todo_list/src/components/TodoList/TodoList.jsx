import Todo from "../Todo/Todo"

function TodoList({lista}) {

    return (
        <div>
            {lista.length>0 && lista.map((todo) => {return <Todo key={todo.id} todoData={todo.todoData} isfinished={todo.finished}/>})}
        </div>
    );
}

export default TodoList