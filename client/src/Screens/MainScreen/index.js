import React, { useState } from 'react';
import SideMenu from '../../components/SideMenu';
import AccCard from '../../components/AccCard';
import AddAccount from '../../components/AddAccount';
import { connect } from 'react-redux';
import './style.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/users';
import { change_header_visible,change_page } from '../../redux/actions/app';
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { useNavigate } from 'react-router-dom';

function MainScreen () {

  // useInvalidUrlAccess();

  const [typeScreen, setTypeScreen] = useState('vk');

  return (
    <div className="main_screen" >
    <div className='main_wrapper'>
      MAIN SCREEN COOMING SOON
    </div>
  </div>
  );
}

export default MainScreen;