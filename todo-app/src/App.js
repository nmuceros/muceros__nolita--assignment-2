import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
// import remove from './images/delete.svg';


function App() {
  return (
    <div className="main-container">
       <meta name="viewport" content="width-device-width, initial-scale=1.0" />
      <h2>My To-Do List</h2>
         <TodoList />
  </div>
  );
};

export default App;