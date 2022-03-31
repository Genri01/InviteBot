import React from 'react';
import FooterIcon from '../FooterIcon/index'
import './style.css';
import images from '../../assets/images';

function FooterMenu(props) {
    return (
      <div className="footer_container">
        <div className="icon_left_container">
          <FooterIcon title = "Выключить звук" img = {images.mic} onClick={() => {}} />
          <FooterIcon title = "Выключить камеру" img = {images.cam} onClick={() => {}} />
        </div>
        <div className="icon_right_container">
          <FooterIcon title = "Показать экран" img = {images.screen} onClick={() => {}} />
          <FooterIcon title = "Чат" img = {images.mess} onClick={() => {}} />
          <FooterIcon title = "Запись" img = {images.rec_stop} onClick={() => {}} />
          <FooterIcon push count={19} title = "Участники" img = {images.users} onClick={() => {}} />
        </div>
      </div>
    );
}

export default FooterMenu;
