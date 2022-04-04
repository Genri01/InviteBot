import React, { useState } from 'react';
import images from '../../../assets/images';
import TextArea from '../TextArea';
import CheckComponent from '../CheckComponent';
import Button from '../../Button';
import './style.css';
import TitleComponent from '../TitleComponent';


export default function RandomizeComponentArea(props) {

  const { title , disabled, children } = props
  const [check,Switching] = useState(false);

  return (
    <div className="randomize_component_area_wrapper" >
      <TitleComponent title="Введите текст для рандомизации" />
      <TextArea />
      <div className="randomize_component_button_conntainer">
          <div onClick={async () => {}} className="signinBtn">
            <div onClick={()=>{}} className="signinBtntext">Сформировать</div>
          </div>
        </div>
    </div>
  );
}