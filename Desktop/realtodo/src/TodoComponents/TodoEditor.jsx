import React, { useRef, useState } from 'react';
import {BsPlusLg} from "react-icons/bs";

const TodoEditor = ({onCreate}) => {

  const todoFocusInput =useRef(); 

  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  }

  const handleTodosubmit = () => {
    if(text.length < 1){
      todoFocusInput.current.focus();
      return;
    } 
    onCreate(text);
    setText('');
  }

  return (
    <div className='TodoEditor'>
      <>
        <input 
          ref = {todoFocusInput}
          placeholder='할 일을 입력해주세요.'
          value={text}
          onCreate={onCreate}
          onChange={handleText}
        /> 
        <button onClick={handleTodosubmit}><BsPlusLg /></button>
      </>
    </div>
  )
}

export default TodoEditor;
