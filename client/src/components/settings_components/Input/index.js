import React from 'react';
import './style.css';


export default function Input(props) {
  const { placeholder , disabled } = props
  return (
    <div className='input_component_wrapper'>
      <input className='input_component_item' onChange={()=>{}} name="nameCard" placeholder='name' value={3} />
    </div>
  );
}