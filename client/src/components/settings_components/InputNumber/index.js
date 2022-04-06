import React from 'react';
import './style.css';


export default function InputNumber(props) {
  const { placeholder , disabled, styles } = props
  return (
    <div style={styles} className='input_number_component_wrapper'>
      <input type='number' className='input_number_component_item' onChange={()=>{}} name="nameCard" placeholder='name' value={3} />
    </div>
  );
}