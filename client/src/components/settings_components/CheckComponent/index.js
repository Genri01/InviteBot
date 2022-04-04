import React, { useState } from 'react';
import images from '../../../assets/images';
import './style.css';


export default function CheckComponent(props) {

  const { title , disabled, children } = props
  const [check,Switching] = useState(false);

  return (
    <div style={{ pointerEvents: disabled ? 'all' : 'none' }}  className="check_component_wrapper" >
        <div  style={{ backgroundColor: disabled ? '' : '#ddddddcc' }} onClick={() => { Switching(!check); }} className='check_component_item'>
         { check && <img src={images.check} alt="check" /> }
        </div>
        {
          children
        }
    </div>
  );
}