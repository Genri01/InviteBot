import React from 'react';
import './style.css';

function FooterChat(props) {
  const { title, img, onClick,push,count } = props;

    return (
      <div className="footer_icon_container" onClick={ ()=>onClick() }>
        { push && <div className="push_container">{count}</div> }
        <div className="footer_img_container">
          <img alt="icon" src={img} className="footer_icon" />
        </div>
        <div className="footer_title_container" onClick={ ()=>onClick() }>
          <div className="footer_title">{title}</div>
        </div>
      </div>
    );
}

export default FooterChat;
