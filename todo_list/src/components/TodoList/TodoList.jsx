
import Todo from "../Todo/Todo"
function TodoList({list,update}) {
    
    return(
        <div>
            {list.length> 0 && 
             list.map( todo => <Todo key={todo.id} id={todo.id} 
                                     isFinished={todo.finished} 
                                     todoData={todo.todoData}
                                     changeFinished = {(isFinished) => {
                                        const updatelist = list.map(t => {
                                            if (t.id == todo.id){
                                                todo.finished = isFinished
                                            }
                                            return t;
                                        });
                                        update(updatelist)
                                     }}
                                />
                     )
            }
        </div>
    )
}

export default TodoList