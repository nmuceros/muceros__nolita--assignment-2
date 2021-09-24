import React, { useState } from "react";
import Todo from "./Todo";
import "../../src/App.css"

const TodoList = () => {
    const [todo, setTodo] = useState(''); 
    const [todos, setTodos] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const changeTodo_Handler = (e) => {
        setTodo(e.target.value);
        console.log(e.target.value)
        setErrorMessage(!errorMessage)
    };

    const submitTodo_Handler = (e) => {
        let timestamp = new Date();
        e.preventDefault(); /* prevents state to return to its default state */

        if(!todo) {
            setErrorMessage("No task has been entered!")
        }
        else {
            setTodos([...todos, {
                entered_todo: todo, 
                completed: false, 
                id: Math.random() * 1000
            }]);
            setTodo(""); /* set the state to its default value */
        }
    }

    return (
        <div className="todo-list-container">
            <div className="form-container">
                <form onSubmit={ submitTodo_Handler }>
                    <input 
                        className="input-todo" 
                        type="text" 
                        placeholder="Enter new task here then hit enter..." 
                        onChange={ changeTodo_Handler} 
                        autoFocus
                        value = { todo } 
                    />
                   
                </form>
            </div>

           {errorMessage && <p className="error">{errorMessage}</p>}
         
            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map((todo) => 
                        <div key={todo.id}>
                                <Todo 
                                    id={todo.id} 
                                    entered_todo={todo.entered_todo}
                                    todos={todos}
                                    setTodos={setTodos}
                                    todo={todo}
                                />
                        </div>
                    )}
                </ul>
             </div>
        </div>
    );
};

export default TodoList;