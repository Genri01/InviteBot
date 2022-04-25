import './App.css'; 
import React, { useLayoutEffect,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInvalidUrlAccess } from './routes/costomNavigation';
import Main from './routes/index';
import HeaderMenu from './components/HeaderMenu'
import Loader from './components/Loader'
import { change_page } from './redux/actions/app';
import { checkAuth } from './redux/actions/users'
import {pages, users, loader} from './redux/selectors'

function App () {
  // useInvalidUrlAccess();
  const dispatch = useDispatch();

  const page = useSelector(pages.page);
  const header_visible = useSelector(pages.header_visible);
  const user = useSelector(users.user);
  const loading = useSelector(loader.loading);

  // const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')) {
      checkAuth(dispatch);
    }
  },[]);

  return (
    <div className="App">
    {loading &&  <Loader />}
    <HeaderMenu 
      headerhim={()=> {}} 
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