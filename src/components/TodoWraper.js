
import React, {useState} from 'react'
import { TodoForm } from './TodoForm' 
//ading v4
import {v4 as uuidv4} from 'uuid';
import {Todo} from './Todo';
//initializing
uuidv4();

export const TodoWraper = () => {
  const[todos, setTodos]=useState([])

  const addTodo= todo =>{
    setTodos([...todos,{id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(todo)
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  
  return (
    <div className='TodoWrapper'>
      <h1>Notitas</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo,index)=>(
            <Todo task ={todo} key={index} 
            toggleComplete = {toggleComplete} deleteTodo={deleteTodo}
            />
        ))}
        
    </div>
  )
}
