import React from 'react';
import './style.css';


export default function TextArea(props) {
  const { placeholder , disabled } = props
  return (
    <div style={{ pointerEvents: !disabled ? 'all' : 'none', color: disabled ? null : 'gray' }} className="textarea_component_wrapper" >
       <textarea placeholder={placeholder}  className="textarea_component_item" />
    </div>
  );
}