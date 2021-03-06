import React, { useState, useEffect, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Todo from "./Todo";
import "../../src/App.css"

const TodoList = () => {
    const [todo, setTodo] = useState(''); 
    const [todos, setTodos] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const inputRef = useRef(null);
    const errMessageText = "Must enter something to be added in the list!"

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const changeTodo_Handler = (e) => {
        setTodo(e.target.value);
        console.log(e.target.value)
        setErrorMessage(!errorMessage)
    };

    const submitTodo_Handler = (e) => {
        let timestamp = new Date();
        e.preventDefault(); /* prevents state to return to its default state */

        if(!todo) {
            setErrorMessage(errMessageText);
        }
        else {
            setTodos([...todos, {
                entered_todo: todo, 
                completed: false, 
                id: Math.round(Math.random() * 1000).toString()
            }].sort( (firstItem, secondItem) => firstItem.completed - secondItem.completed));
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
          transition: `all ${curve} ${duration}s`,
        };
      }           

    return (
        <main className="todo-list-container">
            <div className="form-container">
                <form onSubmit={ submitTodo_Handler }>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                    <input 
                        className="input-todo" 
                        type="text" 
                        placeholder="Input to-do here then hit enter..." 
                        onChange={ changeTodo_Handler} 
                        ref={inputRef}
                        value = { todo } 
                        // style={{ fontSize: "1.5vw"}}
                    />
                </form>
            </div>

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
                                                <div key={todo.id} 
                                                    key={todo.id}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getStyle(provided.draggableProps.style, snapshot)}
                                                >
                                                <Todo 
                                                    id={todo.id} 
                                                    entered_todo={todo.entered_todo}
                                                    todos={todos}
                                                    setTodos={setTodos}
                                                    todo={todo}
                                                    
                                                />
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