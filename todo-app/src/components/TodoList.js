import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Todo from "./Todo";
import "../../src/App.css"

const TodoList = () => {
    const [todo, setTodo] = useState(''); 
    const [todos, setTodos] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const changeTodo_Handler = (e) => {
        setTodo(e.target.value);
        console.log(e.target.value)
        setErrorMessage(!errorMessage)
    };

    const submitTodo_Handler = (e) => {
        let timestamp = new Date();
        e.preventDefault(); /* prevents state to return to its default state */

        if(!todo) {
            setErrorMessage("You have not entered a task! Please enter a task to be added in your list")
        }
        else {
            setTodos([...todos, {
                entered_todo: todo, 
                completed: false, 
                id: Math.round(Math.random() * 1000).toString()
            }]);
            setTodo(""); /* set the state to its default value */
        }
    }

    const reOrder = (todos, startIndex, endIndex) => {
        const result = Array.from(todos);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }


    const onDragEnd_Handler = result => {
        console.log(`Result is ${result}`);
        // console.log(`Result.destination.index is ${result.destination.index}`);

        if (result.destination !== null) {
            setTodos(reOrder(todos, result.source.index, result.destination.index));
        } 
    }
    
    function getStyle(style, snapshot) {
        if (!snapshot.isDropAnimating) {
          return style;
        }
        const { moveTo, curve, duration } = snapshot.dropAnimation;
        // move to the right spot
        const translate = `translate(${moveTo.x}px, ${moveTo.y}px)`;
        // add a bit of turn for fun
        const rotate = 'rotate(0.5turn)';
      
        // patching the existing style
        return {
          ...style,
          transform: `${translate} ${rotate}`,
          // slowing down the drop because we can
          transition: `all ${curve} ${duration + 1}s`,
        };
      }
      
     


    return (
        <main className="todo-list-container">

            <div className="form-container">
                <form onSubmit={ submitTodo_Handler }>
                    <input 
                        className="input-todo" 
                        type="text" 
                        placeholder="Enter new task here then hit enter..." 
                        onChange={ changeTodo_Handler} 
                        autoFocus
                        value = { todo } 
                    />
                
                </form>
            </div>

            {errorMessage && <p className="error">{errorMessage}</p>}




                            <div className="todo-container">

                            
                                <DragDropContext onDragEnd={onDragEnd_Handler}>   

                                    <Droppable droppableId='12345678'>

                                        {(provided, snapshot) => (
                                            <div ref={provided.innerRef}>


                                                <ul className="todo-list">
                                                    {todos.map((todo, index) => (

                                                        <Draggable
                                                            className="draggable"
                                                            draggableId={todo.id}
                                                            key={todo.id}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div 
                                                                    key={todo.id}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getStyle(provided.draggableProps.style, snapshot)}
                                                                >


                                                                    {/* <div key={todo.id}> */}
                                                                            <Todo 
                                                                                id={todo.id} 
                                                                                entered_todo={todo.entered_todo}
                                                                                todos={todos}
                                                                                setTodos={setTodos}
                                                                                todo={todo}
                                                                            />
                                                                    {/* </div> */}
                                                                </div>
                                                            )}   

                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </ul>

                                    
                                             </div>
                                        )}



                                    </Droppable>                            
                                </DragDropContext>                                        


                            </div>    

                            
                                                    



        </main>
    );
};

export default TodoList;