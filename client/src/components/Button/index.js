import React from 'react';
import './style.css';

function Button(props) {
    const {
      icon,
      onClick,
      alt,
      id
    } = props;
    return (
      <div className='btnwrapper'>
        <img id={id} className='settingBtn' onClick={(e) => {onClick(e);e.preventDefault();}} src={icon} alt={alt} />
      </div>
    );
}

export default Button;
