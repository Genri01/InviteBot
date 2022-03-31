import React from 'react';
import SideMenu from '../../components/SideMenu';
import AccCard from '../../components/AccCard';
import AddAccount from '../../components/AddAccount';
import { connect } from 'react-redux';
import './style.css';

class MainScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      typeScreen:'vk'
    }
  }

  render() {
    const {
      typeScreen
    } = this.state
    return (
      <div className="main_screen" >
        <div className='main_wrapper'>
          MAIN SCREEN COOMING SOON
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  const {
    accounts_vk
    // admin:accounts_vk{
    //   form_login,
    //   form_password,
    //   email,
    //   password,
    //   login
    // },
    // config,
    // config:{
    //   oldData: {
    //     toogle_total_temp,
    //     total_temp_max,
    //     total_temp_min,
    //     site_status_has_block
    //   }
    // },
    // rigs,
    // rigs: {
    //   oldData: {
    //     cardsInfoArr
    //   }
    // },
    // info
    
  } = state;
  return {
    // rigs,
    // info,
    // config,
    // form_login,
    // form_password,
    // email,
    // password,
    // login,
    // toogle_total_temp,
    // total_temp_max,
    // total_temp_min,
    // cardsInfoArr,
    // site_status_has_block
  }
}
const mapDispatchToProps = dispatch => {
    return {
      // fetchGetTempRigs: async url => Promise.resolve(dispatch(appGetConfig(url))),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainScreen);
