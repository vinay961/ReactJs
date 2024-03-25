import { useState } from "react"


function TodoAdd({updateList}){

    const [inputText,setinputText] = useState('')

    const handleAddTodo = () => {
        if (inputText.trim() !== '') {
          updateList(inputText);
          setinputText(''); // Clear the input field after adding todo
        }
    };

    return(
        <div>
            <input placeholder="add your next todo..." type="text" value={inputText} onChange= {e => setinputText(e.target.value)} />
            <button  onClick={handleAddTodo}>Add</button>
        </div>
    )
}

export default TodoAdd