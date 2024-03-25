import { useState } from "react"


function Todo({todoData,isFinished,changeFinished}){
    const [finished,setFinished] = useState(isFinished)
    return (
        <div>
            <input type="checkbox" onChange={e => setFinished(e.target.checked)} checked={finished} changeFinished={e.target.checked}/>
            {todoData}
            <button> Edit </button>
            <button> Delete </button>
        </div>
    )
}

export default Todo