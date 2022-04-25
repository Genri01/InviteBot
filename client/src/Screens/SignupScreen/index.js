import React, { useEffect } from 'react';
import './style.css';
import SignupWindow from '../../components/SignupWindow/index';
import { useDispatch } from 'react-redux';
import { change_header_visible } from '../../redux/actions/app';

function SignupScreen(props) {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(change_header_visible(false))
  },[])

  return (
    <div className="sigup_screen" >
      <SignupWindow />
    </div>
  );
}

export default SignupScreen;
