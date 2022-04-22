import React from 'react';
import { Spinner }  from 'react-spinner-animated';

import 'react-spinner-animated/dist/index.css'
import './style.css';

function Loader(props) {
    return (
      <div className="loader_wrapper">
        <Spinner 
        text={"Загрузка ..."} 
        bgColor={"#FFF"} 
        center={false} width={"180px"} 
        height={"100px"}/>
      </div>
    );
}

export default Loader;
