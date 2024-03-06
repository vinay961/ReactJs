import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo.jsx'
import './App.css'
import { useState } from 'react'

function App() {

  const[list,setList] = useState([
    {id:1 , todoData: 'todo 1',finished:false},
    {id:2 , todoData: 'todo 2',finished:false}
  ])

  return (
    <>
      <h1 className='header'>todo_list application development</h1>
      <AddTodo updatelist={(todo) => setList([...list, {id:list.length+1,todoData:todo,finished:false}])} />
      <TodoList lista={list} />
    </>
  )
}
export default App
