import React, { useState } from 'react';
import images from '../../../assets/images';
import TextArea from '../TextArea';
import InputNumber from '../InputNumber';
import CheckComponent from '../CheckComponent';
import Button from '../../Button';
import './style.css';
import TitleComponent from '../TitleComponent';


export default function TimeSetComponent(props) {

  const { title , disabled, children } = props
  const [check,Switching] = useState(false);

  return (
    <div className="time_set_wrapper" >
      <TitleComponent title={title} />
      <div className='time_set_container'>
        <CheckComponent />
        <div className='time_set_input_wrapper'>
          <InputNumber styles={{ width: '80px' }} />
          <div style={{paddingLeft: '10px'}}>:</div>
          <InputNumber styles={{ width: '80px' }} />
        </div>
      </div>
    </div>
  );
}