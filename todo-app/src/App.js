import React, { useState } from 'react';
import './App.css';
import Form from './components/TodoList';
import TodoList from './components/TodoList';
// import remove from './images/delete.svg';


function App() {
  return (
  

    <div className="main-container">
      <h2>My Tasks List</h2>
         <TodoList />
  </div>
  );
};

export default App;
