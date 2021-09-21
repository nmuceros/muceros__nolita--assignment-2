import { useState } from 'react';
import './App.css';
import Form from "./components/TodoList";
import TodoList from './components/TodoList';

function App() {
  return (
  

    <div className="container">
      <h1>My Todo List</h1>
         <TodoList />
  </div>
  );
}

export default App;
