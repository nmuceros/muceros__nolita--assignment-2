import React, { useState } from "react";
// import TodoList from "./TodoList";

const Todo = ({entered_todo, todos, setTodos, todo }) => {

    const [completed, setCompleted] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const completeWhenSelect_Handler = () => {
        // setCompleted(true);

        // setTodos(todos.map( item => {
        //     if(item.id === todo.id) {
        //         return {
        //             ...item, completed: !item.completed
        //         }
        //     }
        //     return item;
        // }

        // )

        // )

    }

    const completeWhenChecked_Handler = e => {
        setIsChecked(!isChecked)

        setTodos(todos.map( item => {
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
                onClick={completeWhenSelect_Handler}
                
            >

                <label className="checkbox-container">
                  
                    <input type="checkbox" 
                            checked={isChecked}
                            onChange={completeWhenChecked_Handler}
                    />

                    <span className="checkmark"></span>
                    {entered_todo}
                </label>

                {/* {entered_todo} */}

            </li>
        </div>

    );
};

export default Todo;