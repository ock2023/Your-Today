import React from 'react';
import { Link } from 'react-router-dom';







const Home = () => {
  return (
    <div className='Home'>
      <div className='Home_header'>Your Today</div>
      <Link to='/todolist' style={ {textDecoration: "none"}}>
        <div className='btn'>To do List</div>
      </Link>
      <Link to='/memo' style={{ textDecoration: "none" }}>
        <div className='btn'>Memo List</div>
      </Link>
    </div>
  )
}

export default Home;
