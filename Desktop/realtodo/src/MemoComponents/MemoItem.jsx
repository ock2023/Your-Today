import React, { useRef, useState } from 'react';
import './../App.css'
import { BsTrashFill, BsPencilFill, BsX, BsCheckLg } from "react-icons/bs";

const MemoItem = ({id, title, content, created_date, onDelete, onEdit}) => {

  const [isEdit, setIsEdit] = useState(false);
  //수정아닌 상태인지, 수정 중 상태인지
  const toggleIsEdit = () => setIsEdit(!isEdit);
  //수정 버튼을 누르면 toggleIsEdit(수정창이 열리도록)이 작동되도록.

  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();
  //textarea의 인풋을 핸들링할 state.

  const handleDelete = ()=>{
    if(window.confirm(`메모를 삭제하시겠습니까?`)){
      onDelete(id)
    }
  }//삭제기능
  

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content)
  }//수정 취소할 때 수행

  const handleEdit = () => {
    if(localContent.length < 5){
      localContentInput.current.focus();
      return;
    }
    onEdit(id, localContent);
    toggleIsEdit();//수정 폼 닫아주기
  }// 수정기능


  
  

  return (
    <div className='MemoItem'>
      <div className='title'>{title}</div>
      <div className='content'>
        {isEdit ? (
          <>
            <textarea 
            ref={localContentInput}
            value={localContent}
            onChange={(e)=>setLocalContent(e.target.value)} 
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      <span className='date'>{new Date(created_date).toLocaleString()}</span>
      <div className='memo_btn'>
        {isEdit ?( 
          <>
            <button onClick = {handleQuitEdit}><BsX /></button>
            <button onClick={handleEdit}><BsCheckLg /></button>
          </>
        ) : (
          <>
            <button onClick = {toggleIsEdit}><BsPencilFill /></button>
            <button onClick={handleDelete}><BsTrashFill /></button>
          </>
        )}
        
      </div>
    </div>
  )
}

export default MemoItem;
