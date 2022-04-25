import React from 'react';
import images from '../../assets/images';
import './style.css';
import { Link } from 'react-router-dom';
import { BlockedSlashLinker } from '../../routes/costomNavigation';
import { useInvalidUrlAccess } from '../../routes/costomNavigation';


function HeaderMenu(props) {
  // useInvalidUrlAccess();
  const { profile, exit }= images;
  const { onClick, userName, visible, page,headerhim} = props;

  const ArrTab = [
    {
      title:"Главная",
      key:"main",
      rout:'/main'
    },
    {
      title:"Аккаунты",
      key:"acc",
      rout:'/accounts'
    },
    {
      title:"Партнерская программа",
      key:"partner",
      rout:'/partners'
    },
    {
      title:"Новости",
      key:"news",
      rout:'/news'
    },
    // {
    //   title:"Настройки",
    //   key:"setting",
    //   rout:'/settings'
    // }
  ];

  let st = {}
  // history.push('/about');
    return (
      <div className="headerWrapper" style={{display: `${visible ? "flex": "none"}`}}>
        <div className="logo"><span style={{fontSize:'40px',fontWeight:'700'}}>in</span><span className='logofont'>ViteBot</span></div>
        <div className="catigories">
            {
              ArrTab.map(({ key, rout, title }) => {
                st = key === page ? { borderBottom: '2px solid #2977dd'} : {}
                return <Link key={key} to={rout}><div id={key} style={st} className="tab" onClick={(e) => { onClick(e) }}>{title}</div></Link>
              })
            }
        </div>
        <div className="profile">
          <img src={profile} alt="profile" width="30" height="30" />
          <div style={{marginRight: '13px', fontWeight: '300',color:'fff'}}>{userName}</div>
          <Link to='/'><img onClick={() => {headerhim()}} style={{cursor:'pointer'}} src={exit} alt="exit" width="28" height="28" /></Link>
        </div>
      </div>
    );
}

export default HeaderMenu;
