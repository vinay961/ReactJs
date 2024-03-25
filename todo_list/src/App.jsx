import { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoAdd from './components/TodoAdd/TodoAdd.jsx';


function App() {
  const [todoList,setlist] = useState([
    {id:1,todoData:'todo-1',finished:false},
    {id:2,todoData:'todo-2',finished:true}
 ])

 const addTodo = (todo) => {
  setlist([...todoList, { id: todoList.length + 1, todoData: todo, finished: false }]);
 };

  return (
    <div>
      <h1>Todo application development</h1>
      <TodoAdd updateList={addTodo} />
      <TodoList list={todoList} update={setlist} />
    </div>
  );
}

export default App;
