import React, { useState } from "react";
import Todo from "./Todo";
import "../../src/App.css"

// import deleteIcon from '../images/delete.svg';

const TodoList = () => {
    /* Hooks */
    const [todo, setTodo] = useState(''); 
    const [todos, setTodos] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // const validation = value => {
    //     let errors='';
        
    //     if(!todo.entered_todo) {
    //         errors="Please enter a new task!";
    //     }
    //     return errors;
    // }

    const changeTodo_Handler = (e) => {
        setTodo(e.target.value);
        console.log(e.target.value)
        setErrorMessage(!errorMessage)

        // setErrors(!errors.todo)
        // setTodo((prevState) => ({
        //     ...prevState, 
        //     [e.target.name]: e.target.value,
        // }));
    };

    const submitTodo_Handler = (e) => {
        e.preventDefault(); /* prevents state to return to its default state */
        // setErrors(validation(e.target.value));
        if(!todo) {
            setErrorMessage("Please enter a task first!")

        }
        else {

        
 
            setTodos([...todos, {
                entered_todo: todo, 
                completed: false, 
                id: Math.random() * 1000,

            
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
                        placeholder="Enter new task here..." 
                        onChange={ changeTodo_Handler} 
                        autoFocus
                        value = { todo } 
                    />
                    {errorMessage && <p className="error">{errorMessage}</p>}
                </form>
            </div>
            {/* <div className="sticky-here">Sticky Here</div> */}
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