import React from 'react';  
import './style.css';
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { useNavigate } from 'react-router-dom';
 
function NewsScreen () {

  // useInvalidUrlAccess();

  return (
    <div className="news_screen" >
    <div className='news_wrapper'>
      NEWS SCREEN COOMING SOON
    </div>
  </div>
  );
}

export default NewsScreen;