import React, { useRef, useState } from 'react';




const MemoTemplate = ({onCreate}) => {

  const titleInput = useRef();
  const contentInput = useRef();

  const [state,setState] = useState({
    title: '',
    content: ''
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    if(state.title.length < 1){
      titleInput.current.focus();
      return;
    } 
    if(state.content.length < 5){
      contentInput.current.focus();
      return;
    }
    onCreate(state.title, state.content)
    setState({
      title: "",
      content: ""
    })//추가 후 리셋(저장 성공하면 리셋)
  }



  return (
    <div className='MemoTemplate'>
        <div>
          <input 
            ref={titleInput}
            name='title'
            placeholder='title'
            value={state.title}
            onChange={handleChangeState}
          />
        </div>
        <div>
          <textarea 
            ref={contentInput}
            name='content'
            placeholder='memo'
            value={state.content}
            onChange={handleChangeState}
          />
        </div>
        <button onClick={handleSubmit}>확인</button>
      
    </div>
  )
}

export default MemoTemplate;
