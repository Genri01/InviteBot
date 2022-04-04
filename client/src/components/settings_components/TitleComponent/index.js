import React from 'react';
import './style.css';


export default function TitleComponent(props) {
  const { title , disabled } = props
  return (
    <div style={{ pointerEvents: !disabled ? 'all' : 'none', color: disabled ? null : 'gray' }} className="title_component_wrapper" >
        <div className='title_component_text'>
          {
            title
          }
        </div>
    </div>
  );
}