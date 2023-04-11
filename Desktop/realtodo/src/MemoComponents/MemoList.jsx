import React from 'react';
import MemoItem from './MemoItem'


const MemoList = ({ memoList, onDelete, onEdit }) => {
  return (
    <div className='MemoList'>
      <h2>메모리스트</h2>
      <h4>{memoList.length}개의 메모가 있습니다.</h4>
      <div>
        {memoList.map((it)=>(
          <MemoItem key={it.id} {...it} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    </div>
  )
}

MemoList.defaultProps = {
  MemoList: []
  //기본값을 빈 배열로 설정.
};

export default MemoList;
