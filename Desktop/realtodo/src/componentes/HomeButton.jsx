import React from 'react';
import { BiHome } from "react-icons/bi";
import {Link} from 'react-router-dom';


const HomeButton = () => {

  

  return (
    <div className='HomeButton'>
      <Link to={'/'} className='home_btn'><BiHome /></Link>
    </div>
  )
}

export default HomeButton;
