import React, { useState } from 'react';
import images from '../../../assets/images';

import CheckComponent from '../../settings_components/CheckComponent';
import Button from '../../Button';
import './style.css';
import TitleComponent from '../TitleComponent';


export default function AddingComponent(props) {
  const {
    check_item,
    onClick
  } = props;
  return (
    <div className="adding_component_wrapper">
      <div className='adding_top_part'>
        <div className='adding_component_left_part'>
          {
            check_item?.map((item,key)=>(
              <CheckComponent key={key} disabled={item.disabled} >
                <TitleComponent disabled={item.disabled} title={item.title}/>
              </CheckComponent>
            ))
          }
        </div>
        <div className='adding_component_rigth_part'>
          <Button icon={images.add} onClick={e => onClick(e)} alt='adding' />
        </div>
      </div>
      <div className='adding_bottom_part'>
        {
          props.children
        }
      </div>
    </div>
  );
}