import React, { useState } from "react";
import Todo from "./Todo";


const TodoList = () => {
    /* Hooks */
    const [todo, setTodo] = useState(''); 
    const [todos, setTodos] = useState([]);

    const changeTodoHandler = (e) => {
        setTodo(e.target.value);
        // setTodo((prevState) => ({
        //     ...prevState, 
        //     [e.target.name]: e.target.value,
        // }));
    };

    const submitTodoHandler = (e) => {
        e.preventDefault(); /* prevents state to return to its default state */
        setTodos([...todos, {todo: todo, completed: false, id: Math.random() * 1000}]);
        setTodo(""); /* set the state to its default value */
    }
    
    

    return (
        <div>
            <form onSubmit={ submitTodoHandler }>
                 <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Add an item..." 
                    onChange={ changeTodoHandler} 
                    value = { todo } />
            </form>

            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map(todo =>  
                        <div key={todo.id}>

                            <Todo 
                                id={todo.id} 
                                todo={todo.todo}
                                todos={todos}
                                setTodos={setTodos}
                            

                            />
                        </div>
                        
                     )};

                    
                </ul>
             </div>



        </div>
    );
    
};

export default TodoList;