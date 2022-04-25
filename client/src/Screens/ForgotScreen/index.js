import React, { useEffect } from 'react';
import './style.css';
import ForgotWindow from '../../components/ForgotWindow'
import { useDispatch } from 'react-redux';
import { change_header_visible } from '../../redux/actions/app';

function ForgotScreen() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(change_header_visible(false))
  },[])

  return (
    <div className="forgot_screen" >
      <ForgotWindow />
    </div>
  );
}

export default ForgotScreen;
