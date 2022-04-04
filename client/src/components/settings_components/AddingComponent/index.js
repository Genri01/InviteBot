import React, { useState } from 'react';
import images from '../../../assets/images';

import CheckComponent from '../../settings_components/CheckComponent';
import Button from '../../Button';
import './style.css';
import TitleComponent from '../TitleComponent';


export default function AddingComponent(props) {
  return (
    <div className="adding_component_wrapper">
      <div className='adding_top_part'>
        <div className='adding_component_left_part'>
          <CheckComponent disabled={true} >
            <TitleComponent disabled={true} title={'Включить'}/>
          </CheckComponent>
          <CheckComponent disabled={true} >
            <TitleComponent disabled={true} title={'Случайный порядок'}/>
          </CheckComponent>
          <CheckComponent disabled={true} >
            <TitleComponent disabled={true} title={'Имя пользователя'}/>
          </CheckComponent>
        </div>
        <div className='adding_component_rigth_part'>
          <Button icon={images.add} onClick={() => {}} alt='adding' />
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