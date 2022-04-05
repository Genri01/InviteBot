import React from 'react';
import './style.css';


export default function ItemDisplayComponent(props) {
  const {type,  id , name, checked, onClick } = props
  const clicked = onClick !== undefined ? onClick : ()=>{}
  return (
    <div onClick={() => { clicked(id) }} className='item_display_wrapper'>
      <div className='item_display_id'>{id}</div>  
      <div className= { type === 'active' ? 'item_display_type_active' : type === 'blocked' ? 'item_display_type_blocked' : checked ? 'item_display_name_checked' : 'item_display_name'}>{name}</div>  
    </div>
  );
}