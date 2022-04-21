import './App.css'; 
import React, { useLayoutEffect,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInvalidUrlAccess } from './routes/costomNavigation';
import Main from './routes/index';
import HeaderMenu from './components/HeaderMenu'
import { change_page, change_header_visible } from './redux/actions/app';
import { checkAuth } from './redux/actions/users'
import {pages, users} from './redux/selectors'

function App () {
  // useInvalidUrlAccess();
  const dispatch = useDispatch();

  const page = useSelector(pages.page);
  const header_visible = useSelector(pages.header_visible);
  const user = useSelector(users.user);

  // const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')) {
      checkAuth(dispatch);
    }
  },[]);

  if(page === "signin") {
    dispatch(change_header_visible(false))
  } else {
    dispatch(change_header_visible(true))
  }

  return (
    <div className="App"> 
    <HeaderMenu 
      headerhim={()=> {
      dispatch(change_page("signin")) }} 
      userName={user.email} 
      visible={header_visible} 
      page={page} 
      onClick={(e) => { dispatch(change_page(e.target.id)); }} 
    />
    <Main />
  </div>
  );
}

export default  App;