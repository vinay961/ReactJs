import React, { useState } from 'react';
import './App.css'
import Todo from './components/Todo/Todo';
import TodoDisplay from './components/TodoDisplay/TodoDisplay.jsx'

function App() {

  return (
    <div className='header'>
      <h1>Todo application development</h1>
      <Todo />
      <TodoDisplay />
    </div>
  );
}

export default App;
