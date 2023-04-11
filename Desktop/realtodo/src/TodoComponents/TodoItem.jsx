import React, { useState, useRef } from 'react';
import {BsTrashFill, BsPencilFill ,BsX ,BsCheckLg} from "react-icons/bs";


const TodoItem = ({id, text, onDelete, onEdit }) => {

  


  const [todoIsEdit, setTodoIsEdit] = useState(false);
  const toggleIsTodoEdit = () => setTodoIsEdit(!todoIsEdit);

  const [localText, setLocalText] = useState(text);
  const localTextInput = useRef();

  const handleTodoDelete = () => {
    onDelete(id)
  }

  const handleQuitTodoEdit = () => {
    setTodoIsEdit(false);
    setLocalText(text)
  }//수정 취소할 때 수행

  const handleTodoEdit = () => {
    if(localText.length < 5){
      localTextInput.current.focus();
      return;
    }
    onEdit(id, localText);
    toggleIsTodoEdit();//수정 폼 닫아주기
  }// 수정기능

  return (
    <div className='TodoItem'>
      
        <input 
          type='checkbox' 
          className='checkbox'
        />
      <div className='text'>
        {todoIsEdit ? (
          <>
            <input 
            ref={localTextInput}
            value={localText}
            onChange={(e)=>setLocalText(e.target.value)} 
            />
          </>
        ) : (
          <>{text}</>
        )}
      </div>
      <div className='todo_btn'>
      {todoIsEdit ?( 
          <>
            <button onClick = {handleQuitTodoEdit}><BsX /></button>
            <button onClick={handleTodoEdit}><BsCheckLg /></button>
          </>
        ) : (
          <>
            <button onClick = {toggleIsTodoEdit}><BsPencilFill /></button>
            <button onClick={handleTodoDelete}><BsTrashFill /></button>
          </>
        )}
      </div>
    </div>
  )
}

export default TodoItem;
