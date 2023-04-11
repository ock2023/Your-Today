import React, { useRef, useState } from 'react';
import TodoItemList from '../TodoComponents/TodoItemList';
import TodoEditor from '../TodoComponents/TodoEditor';
import HomeButton from '../componentes/HomeButton';




const TodoList = () => {



  const [todoData,setTodoData] = useState([]);
  const todoDataId = useRef(0);

  const onTodoCreate = (text) => {
    const newTodoItem = {
      
      text,
      id: todoDataId.current
    }
    todoDataId.current +=1
    setTodoData([...todoData, newTodoItem])
  }

  const onTodoDelete = (TargetId) => {
    const DeleteTodoList = todoData.filter((it)=>{
      return it.id !== TargetId
    })
    setTodoData(DeleteTodoList);
  }

  const onTodoEdit = (targetId, newText) => {
    setTodoData(
      todoData.map(it=>it.id===targetId ? {...it,text: newText} : it)
    )
  }

  return (
    <div className='TodoList'>
      <HomeButton />
      <div className='Todo_header'>To do List</div>
      <TodoEditor onCreate={onTodoCreate} />
      <TodoItemList todoList={todoData} onDelete={onTodoDelete} onEdit={onTodoEdit} />
    </div>
  )
}

export default TodoList;
