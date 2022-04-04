import React, { useState } from 'react';
import images from '../../../assets/images';
import TextArea from '../TextArea';
import InputNumber from '../InputNumber';
import CheckComponent from '../CheckComponent';
import Button from '../../Button';
import './style.css';
import TitleComponent from '../TitleComponent';


export default function CountInput(props) {

  const { title , disabled, children } = props
  const [check,Switching] = useState(false);

  return (
    <div className="count_input_wrapper" >
      <TitleComponent title="sddfsd" />
      <InputNumber />
    </div>
  );
}