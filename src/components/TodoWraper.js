
import React, {useState} from 'react'
import { TodoForm } from './TodoForm' 
//ading v4
import {v4 as uuidv4} from 'uuid';
//initializing
uuidv4();

export const TodoWraper = () => {
  const[todos, setTodos]=useState([])

  const addTodo= todo =>{
    setTodos([...todos,{id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(todo)
  }
  return (
    <div className='TodoWrapper'>
        <TodoForm addTodo={addTodo}/>
    </div>
  )
}
