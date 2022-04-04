import React, { useState } from 'react';
import images from '../../../assets/images';
import TextArea from '../TextArea';
import InputNumber from '../InputNumber';
import CheckComponent from '../CheckComponent';
import Button from '../../Button';
import './style.css';
import TitleComponent from '../TitleComponent';


export default function ManualSelect(props) {

  const { title , disabled, children } = props
  const [check,Switching] = useState(false);

  return (
    <div className="manual_select_wrapper" >
      <TitleComponent title="sddfsd" />
      <div className='manual_select_component_task_wrapper'>
        <select className='manual_select_component_task'>
              <option >Ручной</option>
              <option >Автомат</option>
        </select>
      </div>
    </div>
  );
}