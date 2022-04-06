import React from 'react';
import './style.css';

function CheckIcon(props) {
    const {
      icon,
      onClick,
      alt,
      value
    } = props;
    return (
      <div className='checkWrapper'>
        <input name={value.name} onChange={(e) => { onClick({ check: !value.check, name: value.name });}} className='checkArrow' type='checkbox'></input>  
        <img className='imgSetting' src={icon} alt={alt} />
      </div>
    );
}

export default CheckIcon;
