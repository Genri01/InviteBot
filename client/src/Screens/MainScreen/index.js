import React, { useEffect } from 'react';  
import './style.css';
import { useDispatch } from 'react-redux';
import { change_header_visible } from '../../redux/actions/app';
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { useNavigate } from 'react-router-dom';

function MainScreen () {

  // useInvalidUrlAccess();

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(change_header_visible(true))
  },[])

  return (
    <div className="main_screen" >
    <div className='main_wrapper'>
      MAIN SCREEN COOMING SOON
    </div>
  </div>
  );
}

export default MainScreen;