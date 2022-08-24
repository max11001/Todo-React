import React, { useState } from 'react'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList/TodoList';

function ToDo() {

  const [todoList, setTodoList] = useState([]);

  const deleteElement = (id) => {
    setTodoList(todoList.filter((elem) => elem.id !== id));
  }

  const handleSubmit = (text) => {
    if(text)  
      setTodoList((prev) => [...prev, {text: text, id: text + Math.floor(Math.random() * 1000)}]);
  }

  const handleEdit = (text, id) => {
    if(text){  
      setTodoList((prev) => {return prev.map((elem) => {
          if(elem.id === id)
            elem.text = text;
          return elem;
        })}
      );
    }
  }

  return (
    <div className='todo-app'>
      <h1>Plans for the day?</h1>
      <TodoForm buttonChange={handleSubmit}/>
      <TodoList buttonChange={handleEdit} delete={deleteElement} items={todoList} />
    </div>
  )
}

export default ToDo