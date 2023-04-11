import React from 'react';
import MemoTemplate from '../MemoComponents/MemoTemplate'
import { useState, useRef } from 'react';
import MemoList from '../MemoComponents/MemoList';
import HomeButton from '../componentes/HomeButton';




const Memo = () => {

  
  
  const [data,setData] = useState([]);

  const dataId = useRef(0);

const onCreate = (title, content) => {
  const created_date = new Date().getTime();
  const newItem = {
    title,
    content,
    created_date,
    id: dataId.current
  }
  dataId.current += 1;
  setData([newItem, ...data]);
}

const onDelete = (targetId) => {
  const DeleteMemoList = data.filter((it)=>{
    return it.id !== targetId
  })
  setData(DeleteMemoList);
}

const onEdit = (targetId, newContent) => {
  setData(
    data.map(it => it.id === targetId ? {...it, content: newContent} : it)
  )
}

  return (
    <div className='Memo'>
      <HomeButton />
      <div className='Memo_header'>Memo List</div>
      <MemoTemplate 
        onCreate={onCreate}  
      />
      <MemoList memoList={data} onEdit={onEdit} onDelete={onDelete}/>
    </div>
  )
}

export default Memo;
