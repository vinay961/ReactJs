
function TodoList() {
    const todoList = [
        {id:1,todoData:'todo-1'},
        {id:2,todoData:'todo-2'}
    ]

    return(
        <div>
            {todoList.length> 0 && todoList.map((data)=> {})}
        </div>
    )
}

return TodoList