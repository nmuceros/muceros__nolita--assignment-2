import React, { useState } from "react";
// import TodoList from "./TodoList";

const Todo = ({entered_todo, todos, setTodos, todo }) => {

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
                {entered_todo}
            </li>
        </div>

    );
};

export default Todo;
