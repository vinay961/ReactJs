import { useState } from "react"
import './AddTodo.css'

function AddTodo({updatelist}) {

    const [inputText,setInputText] = useState('')
    return (
        <div className="mainContent1">
            <input type="text"  
                placeholder="Add Your todo"
                value={inputText}
                onChange={(e)=>setInputText(e.target.value)} 
            />
            
            <button onClick={()=>updatelist(inputText)}>Add</button>
        </div>
    )
}

export default AddTodo