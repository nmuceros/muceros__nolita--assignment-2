import React, { useState } from "react";
// import TodoList from "./TodoList";

const Todo = ({input, todos, setTodos, todo }) => {

    const [completed, setCompleted] = useState(false);

    const completeTodoHandler = () => {
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
        <div>
            <li className="todo-item" onClick={completeTodoHandler}
                style={{ color: completed === true ? "grey" : "" }}>
                {input}
            </li>
        </div>

    );
};

export default Todo;
