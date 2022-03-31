import React from 'react';
import './style.css';

function CheckIcon(props) {
    const {
      icon,
      onClick,
      name,
      id,
      alt
    } = props;
    return (
      <div className='checkWrapper'>
        <input className='checkArrow' name={name} id={id} type='checkbox'></input>  
        <img className='imgSetting' src={icon} alt={alt} />
      </div>
    );
}

export default CheckIcon;
