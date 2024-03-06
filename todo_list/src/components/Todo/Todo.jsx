import './Todo.css'

function Todo({todoData,isfinished}) {
    return(
        <div className="mainContent">

            <input type="checkbox" checked={isfinished} />
            {todoData}
            <button>Edit</button>
            <button>Delete</button>

        </div>
    )
}

export default Todo