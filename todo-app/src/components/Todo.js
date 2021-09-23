import React, { useState } from "react";
// import TodoList from "./TodoList";

const Todo = ({entered_todo, todos, setTodos, todo }) => {

    const [completed, setCompleted] = useState(false);

    const completeTodo_Handler = () => {
        setCompleted(true);

        setTodos(todos.map( (item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }

        )

        )

    }

    return (
        <div className="todo-item-container">
            {/* style={{ color: completed === true ? "grey" : "" }} */}
            <li className={`todo-item ${todo.completed ? "completed" : ''}`} 
                onClick={completeTodo_Handler}
                
            >

                {/* <label className="checkbox-container">
                  
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    {entered_todo}
                </label> */}

                {entered_todo}

            </li>
        </div>

    );
};

export default Todo;