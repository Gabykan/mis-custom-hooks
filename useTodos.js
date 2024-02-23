import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () =>{
    // if(localStorage.getItem('todos') !== 'undefined'){
    //     return JSON.parse(localStorage.getItem('todos'));
    // }else{
    //     return [];
    // }
    return JSON.parse(localStorage.getItem('todos')) || [];
    //return [];
  }
export const useTodos = ( initialState = []) => {
    
      const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init); 
      

      //setTodosCount( todos.length);

      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);
    

     
      const handleNewTodo = (todo) =>{
        const action ={
            type:'[TODO] Add Todo',
            payload: todo
        };
        dispatchTodo(action);
        console.log({todo});
      }

      const handleDeleteTodo = (id) =>{
        console.log(id);
        dispatchTodo({
          type:'[TODO] Remove Todo',
          payload:id
        });
      }
          

      const handleToggleTodo = (id ) => {
        console.log({id});
        dispatchTodo({
          type:'[TODO] Toggle Todo',
          payload: id
        });
      }

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todos => !todos.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo

    }
    
}
