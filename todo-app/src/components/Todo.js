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
        <div className="todo-item-container">
            <li className="todo-item" onClick={completeTodoHandler}
                style={{ color: completed === true ? "grey" : "" }}>

                <label className="checkbox-container">
                  
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    {entered_todo}
                </label>

             

            </li>
        </div>

    );
};

export default Todo;
