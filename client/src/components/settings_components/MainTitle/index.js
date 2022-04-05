import React from 'react';
import './style.css';

export default function MainTitle(props) {
  const { title_acc } = props
  return (
    <div className="main_title_component_wrapper" >
      <div className='main_title_component_text'>Настройки аккаунта:</div>
        <div className='main_title_component_text_acc'>
          {
            `\"${title_acc}\"`
          }
        </div>
    </div>
  );
}