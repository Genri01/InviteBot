import React, { useState } from 'react';
import images from '../../../assets/images';
import TextArea from '../TextArea';
import CheckComponent from '../CheckComponent';
import Button from '../../Button';
import './style.css';


export default function AnswerComponentArea(props) {

  const { title , disabled, children, styles } = props
  const [check,Switching] = useState(false);

  return (
    <div className="answer_component_area_wrapper" >
      <div className='answer_component_left_part'>
        <CheckComponent />
        <TextArea styles={styles} />
      </div>
      <div className='answer_component_right_part'>
       <Button icon={images.del} />
      </div>
    </div>
  );
}