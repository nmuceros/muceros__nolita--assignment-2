import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import time from './images/time.png';

function App() {
  return (
    <div className="main">
        <head>
          <meta name="viewport" content="width-device-width, initial-scale=1.0" />
        </head>
        <h2>My To-Do List</h2>
        {/* <div className="time-container">
            <img src={time}/>
        </div> */}
        <TodoList />
  </div>
  );
};

export default App;