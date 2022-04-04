import React, { useState } from 'react';
import images from '../../../assets/images';
import TextArea from '../TextArea';
import Input from '../Input';
import CheckComponent from '../CheckComponent';
import Button from '../../Button';
import './style.css';


export default function AudioComponentArea(props) {

  const { title , disabled, children } = props
  const [check,Switching] = useState(false);

  return (
    <div className="audio_component_folder_wrapper" >
      <CheckComponent />
      <div className='audio_button_wrapper'>
        <Button icon={images.folder} />
      </div>
      <Button icon={images.del} />
    </div>
  );
}