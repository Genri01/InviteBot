import React, { useState } from 'react';
import images from '../../../assets/images';
import TextArea from '../TextArea';
import CheckComponent from '../CheckComponent';
import Button from '../../Button';
import './style.css';


export default function AnswerComponentArea(props) {

  const { title , disabled, children } = props
  const [check,Switching] = useState(false);

  return (
    <div className="answer_component_area_wrapper" >
      <CheckComponent />
      <TextArea />
      <Button icon={images.del} />
    </div>
  );
}