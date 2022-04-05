import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainSettingsComponent from '../settings_components/MainSettingsComponent';
import './style.css';

export default function VisualSettingsComponent (props) {

  const { accounts, typeScreen } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="visual_settings_wrapper" >
      <div className='visual_settings_container'>
        <MainSettingsComponent />
      </div>
    </div>
  );
}

