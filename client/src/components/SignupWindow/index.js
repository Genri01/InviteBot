import React from 'react';
import images from '../../assets/images';
import './style.css';

class SignupWindow extends React.Component  {
  constructor( props ){
    super( props );
    this.state = {
      eye_pass: false,
      eye_replay: false,
      type_pass: 'password',
      type_replay: 'password',
    }
  }
  render() {
    const {
      eye_replay,
      eye_pass,
      type_pass,
      type_replay,

    } = this.state;
    return (
      <div className="signUpWindowWrapper">
        <div className="signUpImageContainer" />
        <div className="signUpInfoContainer">
          <div className="signUpLoginContainer">
            <div className="">EMAIL</div>
            <input placeholder='Введите имя' className="signUpLogin" />
          </div>
          <div className="signUpPasswordContainer">
            <div className="">PASSWORD</div>
            <div className='passContain'>
              <input type={type_pass} placeholder='Введите пароль' className="signUpPassword" />
              {
              eye_pass ? <img onClick={()=>{this.setState({eye_pass:!eye_pass, type_pass:"password"})}} aly="eyeon" src={images.eye_on}  className="signUpPasswordEye"/>:
              <img onClick={()=>{this.setState({eye_pass:!eye_pass, type_pass:"text"})}} aly="eyeoff" src={images.eye_off}  className="signUpPasswordEye"/>
              }
            </div>
          </div>
          <div className="signUpPasswordReplayContainer">
            <div className="">PASSWORD REPLAY</div>
            <div className='passContain'>
              <input type={type_replay} placeholder='Введите пароль еще раз' className="signUpPasswordReplay" />
              {
              eye_replay ? <img onClick={()=>{this.setState({eye_replay:!eye_replay, type_replay:"password"})}} aly="eyeon" src={images.eye_on}  className="signUpPasswordEye"/>:
              <img onClick={()=>{this.setState({eye_replay:!eye_replay, type_replay:"text"})}} aly="eyeoff" src={images.eye_off}  className="signUpPasswordEye"/>
              }
            </div>
          </div>
          <div style={{display:"none"}} className="signUpErrContainer">
            <div className="signUpErr">Пользователь с таким именем уже существует</div>
          </div>
          <div className="signUpBtnContainer">
            <div className="signUpBtn">
              <div className="signUpBtntext">Зарегистрироваться</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupWindow;
