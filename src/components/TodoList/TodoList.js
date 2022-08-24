import React, {useState} from 'react'
import { AiOutlineDelete, AiFillEdit } from 'react-icons/ai/';
import TodoForm from '../TodoForm';


function TodoList(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const updateTodo = (id, val) => {
    setEdit({id: id, value: val});
  }

  const updateEdit = (text, id) =>{
    props.buttonChange(text, edit.id);
    setEdit({id: null, value: ''});
  }
  if(edit.id){
    return <TodoForm text={edit.value} buttonChange={updateEdit} />
  }
  return (
    <>
      {props.items.map((element) => {
        return (
          <div className='todo-row' key={element.id}>
            <h2>
              {element.text}
            </h2>
            <div className='icons'>
              <AiFillEdit className='delete-icon' onClick={() => updateTodo(element.id, element.text)}/>
              <AiOutlineDelete className='edit-icon' onClick={() => props.delete(element.id)}/>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default TodoList