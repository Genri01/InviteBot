import React from 'react';
import images from '../../assets/images';
import './style.css';

function SideMenu(props) {
  const { tg, inst, vk } = images;
  const { onClick, typeScreen} = props;
  let ArrImg = [
    {
      type:"vk",
      img:vk
    },
    {
      type:"tg",
      img:tg
    },
    {
      type:"inst",
      img:inst
    }];
  let st = {}
    return (
      <div className="sideMenuWrapper">
        <div className="sideCatigories">
          {
            ArrImg.map((item) => {
              st = item.type === typeScreen ? { border: '3px solid rgb(0 247 179)',borderRadius:'12px'} : {borderRadius:'12px'}
              return <img key={item.type} id={item.type} style={st} onClick={(e) => { onClick(e) }} className="tabSide" src={item.img} alt="img" />
            }
            )
          }
        </div>
      </div>
    );
}

export default SideMenu;
