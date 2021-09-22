import React, { useState } from "react";
import Todo from "./Todo";


const TodoList = () => {
    /* Hooks */
    const [todo, setTodo] = useState(''); 
    const [todos, setTodos] = useState([]);

    const changeTodo_Handler = (e) => {
        setTodo(e.target.value);
        // setTodo((prevState) => ({
        //     ...prevState, 
        //     [e.target.name]: e.target.value,
        // }));
    };

    const submitTodo_Handler = (e) => {
        e.preventDefault(); /* prevents state to return to its default state */
        setTodos([...todos, {entered_todo: todo, completed: false, id: Math.random() * 1000}]);
        setTodo(""); /* set the state to its default value */
    }
    
    

    return (
        <div>
            <form onSubmit={ submitTodo_Handler }>
                 <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Add an item..." 
                    onChange={ changeTodo_Handler} 
                    value = { todo } />
            </form>

            {/* <div className="todo-container"> */}
                <ul className="todo-list">
                    {todos.map((todo) => 
                        // <div key={todo.id}>

                            <label class="container">
                                
                                <Todo 
                                    id={todo.id} 
                                    entered_todo={todo.entered_todo}
                                    todos={todos}
                                    setTodos={setTodos}
                                    todo={todo}
                                />
                                
                                 <input type="checkbox" />
                                 <span class="checkmark"></span>
                            </label>



                           
                            
                        // </div>
                        
                    )}

                    
                </ul>
             {/* </div> */}



        </div>
    );
    
};

export default TodoList;