// App.jsx

import { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoAdd from './components/TodoAdd/TodoAdd.jsx';
import TodoContext from './TodoContext/TodoContext';
import './App.css'; // Import CSS file

function App() {
  const [todoList,setlist] = useState([
    {id:1,todoData:'todo-1',finished:false},
    {id:2,todoData:'todo-2',finished:false}
  ]);

  const addTodo = (todo) => {
    setlist([...todoList, { id: todoList.length + 1, todoData: todo, finished: false }]);
  };

  return (
    <TodoContext.Provider value={{todoList,setlist}}> 
      <div className="app-container"> {/* Apply the container class */}
        <h1 className="app-title">Todo application development</h1> {/* Apply the title class */}
        <TodoAdd updateList={addTodo} />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
