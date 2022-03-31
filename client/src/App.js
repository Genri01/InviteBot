
import './App.css'; 
import React from 'react';
import { connect } from 'react-redux';
import Main from './routes/index';
import HeaderMenu from './components/HeaderMenu'
import { change_page, change_header_visible } from './redux/actions/app' 

class App extends React.Component {
  // constructor( props ) {
  //   super( props );

  // }
  render() {
    const { header_visible, page, changePage, changeHeaderVisible } = this.props;

    if(page === "signin") {
      changeHeaderVisible(false)
    } else {
      changeHeaderVisible(true)
    }
    return (
      <div className="App"> 
        <HeaderMenu headerhim={()=> {console.log("!@!"); changePage("signin") }} userName="Addministrator" visible={header_visible} page={page} onClick={(e) => { changePage(e.target.id); }} />
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
