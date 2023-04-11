import React from 'react';
import TodoItem from './TodoItem';



const TodoItemList = ({todoList, onDelete, onEdit}) => {

  const dateString = new Date().toLocaleDateString('ko-kr',{
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = new Date().toLocaleDateString('ko-kr',{weekday:'long'})

  return (
    <div className='TodoItemList'>
      <h1>{dateString}</h1>
      <div className='day'>{dayName}</div>
      <div>
        {todoList.map((it)=>(
            <TodoItem key={it.id} {...it} onDelete={onDelete} onEdit={onEdit} />
          ))}
          
      </div>
    </div>
  )
}


TodoItemList.defaultProps = {
  TodoItemList: []
  
};

export default TodoItemList;
