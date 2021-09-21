import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = ({ todo, todos, setTodos }) => {

    const [completed, setCompleted] = useState(false);

    const completeTodoHandler = () => {
        // setCompleted(true);
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
        <div>
            <li 
                classname="todo-item">{ todo }
                {/* onClick={ completeTodoHandler } */}
                
                
            </li>
        </div>

    );
};

export default Todo;
