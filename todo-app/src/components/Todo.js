import React, { useState } from "react";
// import TodoList from "./TodoList";
import deleteIcon from '../images/delete.svg';

const Todo = ({entered_todo, todos, setTodos, todo }) => {

    const [isChecked, setIsChecked] = useState(false);


    const getCurrentDateTime = () => {
        let currentDate = new Date();
        let formattedDate = currentDate.getFullYear() + '-' + (currentDate.getMonth()+1) + '-' + currentDate.getDate() +' '+ currentDate.getHours()+':'+ currentDate.getMinutes()+':'+ currentDate.getSeconds();
        /* The output will be in this format YYYY-MM-DD H:MM:SS */
        return formattedDate;
     
    }


    const completeTodo_Handler = e => {
        setIsChecked(!isChecked)

        // setTodos(todos.map( item => {
        //     if(item.id === todo.id) {
        //         return {
        //             ...item, completed: !item.completed, timestamp: getCurrentDateTime()
        //         };
        //     }
        //     return item;
        // }));

        const completeTodo = todos.map( item => {
                if(item.id === todo.id) {
                    return {
                        // ...item, completed: !item.completed, timestamp: getCurrentDateTime()
                        ...item, completed: !item.completed
                    };
                }
                return item;
            });

        setTodos(completeTodo.sort( (firstItem, secondItem) => {
            // return firstItem.completed - secondItem.completed || firstItem.timestamp - secondItem.timestamp;
            return firstItem.completed - secondItem.completed;
        }));
        
    };

    const deleteTodo_Handler = () => {

        setTodos(todos.filter( (item) => item.id !== todo.id ));
    };

    return (
        <div className="todo-item-container">
         
                <div className="delete-container" onClick={deleteTodo_Handler} >
                    <a>
                         <img className="delete-icon" alt="" src={deleteIcon} />
                   </a>
                 </div>

                <li className={`todo-item ${todo.completed ? "completed" : "todo-item"}`} 
                >
            

                    <label className="checkbox-container">
                   
                        <input type="checkbox"
                                checked={isChecked}
                                onChange={completeTodo_Handler}
                                style={{cursor: "pointer"}}
                        />
                    
                        {entered_todo}



                    </label>


                </li>

        

        </div>

    );
};

export default Todo;