
import './App.css'; 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInvalidUrlAccess } from './routes/costomNavigation';
import Main from './routes/index';
import HeaderMenu from './components/HeaderMenu'
import { change_page, change_header_visible } from './redux/actions/app';
import { checkAuth } from './redux/actions/users'
import {pages, users} from './redux/selectors'
import { useNavigate } from 'react-router-dom';

function App () {
  // useInvalidUrlAccess();

  const dispatch = useDispatch();
  // const navigate = useNavigate()
  useEffect(() => {
    if(localStorage.getItem('token')) {
      checkAuth(dispatch)
    }
    if(useSelector(pages.page) === "signin") {
      dispatch(change_header_visible(false))
    } else {
      dispatch(change_header_visible(true))
    }
  });

  return (
    <div className="App"> 
    <HeaderMenu 
      headerhim={()=> {
      dispatch(change_page("signin")) }} 
      userName="Addministrator" 
      visible={useSelector(pages.header_visible)} 
      page={useSelector(pages.page)} 
      onClick={(e) => { dispatch(change_page(e.target.id)); 
      }} 
    />
    <Main />
  </div>
  );
}
export default  App;
/*
import './App.css'; 
import React from 'react';
import { connect } from 'react-redux';
import Main from './routes/index';
import HeaderMenu from './components/HeaderMenu'
import { change_page, change_header_visible } from './redux/actions/app';
import { checkAuth } from './redux/actions/users'
class App extends React.Component {
    componentDidMount() {
      const { changeHeaderVisible,  page  } = this.props;
    if(localStorage.getItem('token')) {
      checkAuth()
    }

    if(page === "signin") {
      changeHeaderVisible(false)
    } else {
      changeHeaderVisible(true)
    }
  }
  render() {
    const { header_visible, page, changePage } = this.props;
    return (
      <div className="App"> 
        <HeaderMenu headerhim={()=> { changePage("signin") }} userName="Addministrator" visible={header_visible} page={page} onClick={(e) => { changePage(e.target.id); }} />
        <Main />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    pages: {
      header_visible,
      page
    }
  } = state;
  return {
    header_visible,
    page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changePage: (page) => { dispatch(change_page(page)) },
    changeHeaderVisible: (visible) => { dispatch(change_header_visible(visible)) },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
*/