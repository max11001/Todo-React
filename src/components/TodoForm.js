import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
  const [inputText, setInputText] = useState(props.text ? props.text : '');
  
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  }

  const handleSubmitForm = () => {
    props.buttonChange(inputText,);
    setInputText('');
  }

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });


  return (
    <div className='todo-form'>
        <input ref={inputRef} className="todo-input" placeholder='type sth' onChange={handleInputChange} type='text' value={inputText} />
        <button className='todo-button' onClick={handleSubmitForm}>Add!</button>
    </div>
  )
}

export default TodoForm