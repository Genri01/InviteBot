import React from 'react';
import SideMenu from '../../components/SideMenu';
import AccCard from '../../components/AccCard';
import AddAccount from '../../components/AddAccount';
import PopapLogin from '../../components/PopapLogin';
import { connect } from 'react-redux';
import {change_side_menu} from '../../redux/actions/app'
import './style.css';

class AccountScreen extends React.Component {

  render() {

    const {
      changeSideMenu,
      type_side_menu,
      accounts_vk: {
        newDataAccountVK,
      }
    } = this.props;
    let AccountNetwork = [];
    
    if(newDataAccountVK.acc.length === 0) {
       AccountNetwork = []
    } else {
       AccountNetwork = type_side_menu === "vk" ? newDataAccountVK.acc : type_side_menu === "inst" ? newDataAccountVK.acc : newDataAccountVK.acc;
    }


    return (
      <div className="account_screen" >
        {/* <PopapLogin visible_popup={false} /> */}
        <SideMenu onClick={(e)=>{changeSideMenu(e.target.id)}} typeScreen={type_side_menu} />
        <div className='activeAcc'>
          <div className='titleAcc'>Активные:</div>
          <div className='accContainer'>
            <AddAccount type={type_side_menu} />
            {
              AccountNetwork.map((item,i) => (
                <AccCard key={i} accinfo={item} id={item.id} name={item.settingsAcc.name} type={type_side_menu} />
              ))
            }
          </div>
        </div>
        <div className='blockedAcc'>
          <div className='titleAcc'>Заблокированные:</div>
          <div className='accContainer'>
            <div className='blockedWrapper'>
              <div className='orderBlocked'>1</div>
              <div className='nameBlocked'>vk-inboxwhite</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {

  const {
    accounts_vk,
    side_menu: {
      type_side_menu
    }
  } = state;
  return {
    accounts_vk,
    type_side_menu
  }
}
const mapDispatchToProps = dispatch => {
    return {
      changeSideMenu: item => dispatch(change_side_menu(item)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountScreen);
