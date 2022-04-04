import React, { useState } from 'react';
import images from '../../../assets/images';
import './style.css';


export default function RadialBtnComponent(props) {

  const { title , disabled, children } = props
  const [check,Switching] = useState(false);

  return (
    <div style={{ pointerEvents: !disabled ? 'all' : 'none' }}  className="radial_component_wrapper" >
        <div  style={{ backgroundColor: disabled ? '' : '#ddddddcc' }} onClick={() => { Switching(!check); }} className='radial_component_item'>
         { check && <div className='radial_check' /> }
        </div>
        {
          children
        }
    </div>
  );
}