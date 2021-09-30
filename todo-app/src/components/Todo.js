import React, { useState } from "react";
// import deleteIcon from '../images/remove_circle_black.svg';
// import deleteIcon from '../images/remove_circle_white.svg';
import deleteIcon from '../images/delete.svg';

const Todo = ({entered_todo, todos, setTodos, todo, timestamp }) => {
    
    const [isChecked, setIsChecked] = useState(false);

    const getCurrentDateTime = () => {
        let currentDate = new Date();
        /* The output will be in this format YYYY-MM-DD H:MM:SS */
        let formattedDate = currentDate.getFullYear() + '-' + (currentDate.getMonth()+1) + '-' + currentDate.getDate() +' '+ currentDate.getHours()+':'+ currentDate.getMinutes()+':'+ currentDate.getSeconds();
        /* converts the date and time into milseconds */
        return Date.parse(formattedDate);
    }


    const completeTodo_Handler = e => {
        setIsChecked(!isChecked)
        const completeTodo = todos.map( item => {
                if(item.id === todo.id) {
                    return {
                        ...item, completed: !item.completed, timestamp: getCurrentDateTime()
                    };
                }
                return item;
         });
        setTodos(completeTodo.sort((firstItem, secondItem) => { 
            return firstItem.completed - secondItem.completed || firstItem.timestamp - secondItem.timestamp
          }
        ));
        
    };


    const deleteTodo_Handler = () => {
        setTodos(todos.filter( (item) => item.id !== todo.id ));
    };


    return (
        <div className="todo-item-container">
         
            <div className="delete-container"  >
                <a>
                    <img className="delete-icon" onClick={deleteTodo_Handler} alt="" src={deleteIcon} />
                </a>
             </div>

            <li className={`todo-item ${todo.completed ? "completed" : "todo-item"}`} >
                <label className="checkbox-container">
                    <input type="checkbox" 
                            // style={{float:"left"}}
                            checked={isChecked}
                            onChange={completeTodo_Handler}
                            style={{cursor: "pointer", float: "left", marginRight: "5px"}}
                    />
                    <span
                        style={{overflow:"hidden"}}
                    >{entered_todo}</span>
                </label>
            </li>
        </div>
    );
};

export default Todo;