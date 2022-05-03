import React, { useEffect } from 'react';
import './style.css';
import SigninWindow from '../../components/SigninWindow/index';
import { useDispatch } from 'react-redux';
import { change_header_visible } from '../../redux/actions/app';
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';


function SigninScreen(props) {
  // useInvalidUrlAccess();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(change_header_visible(false))
  },[])

  return (
    <div className="sigin_screen" >
      <SigninWindow />
    </div>
  );
}

export default SigninScreen;