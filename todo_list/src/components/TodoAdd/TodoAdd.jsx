// TodoAdd.js

import { useState } from "react";
import "./TodoAdd.css"; // Import CSS file

function TodoAdd({ updateList }) {
    const [inputText, setInputText] = useState('');

    const handleAddTodo = () => {
        if (inputText.trim() !== '') {
          updateList(inputText);
          setInputText(''); // Clear the input field after adding todo
        }
    };

    return (
        <div className="todo-add-container"> {/* Apply the container class */}
            <input 
                className="todo-input" 
                placeholder="add your next todo..." 
                type="text" 
                value={inputText} 
                onChange={e => setInputText(e.target.value)} 
            />
            <button className="add-button" onClick={handleAddTodo}>Add</button> {/* Apply the button class */}
        </div>
    );
}

export default TodoAdd;
