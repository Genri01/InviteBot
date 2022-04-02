import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import images from '../../assets/images';
import { registration } from '../../redux/actions/users';
import { useInvalidUrlAccess } from '../../routes/costomNavigation';
import './style.css';
import { useNavigate } from 'react-router-dom';

function validateEmail(email) {
  var pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
  return pattern.test(email);
}

function SignupWindow () {
  // useInvalidUrlAccess();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_replay, setPasswordReplay] = useState('');
  const [err, setErrorForms] = useState(false);
  const [errEmail, setErrorEmail] = useState(false);
  const [errText, setErrorText] = useState('Введенные пароли не совпадают');
  const [errorColor, setErrorColor] = useState(false);
  const [visible_pass, setVisiblePass] = useState(false);
  const [visible_replay, setVisibleReplay] = useState(false);
  const [eye_pass, setEyePass] = useState(false);
  const [eye_replay, setEyeReplay] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  var timerlength = '';
  var timer = '';

  return (
    <div className="signUpWindowWrapper">
        <div className="signUpImageContainer" />
        <div className="signUpInfoContainer">
          <div className="signUpLoginContainer">
            <div className="">EMAIL</div>
            <input name="email" value={email} onChange={(e)=>{
              setErrorEmail(validateEmail(e.target.value))
              setEmail(e.target.value)
              }} placeholder='Введите имя' className={`signUpLogin ${(errEmail && email != '') ? '' : 'error_input'}`}  />
          </div>
          <div className="signUpPasswordContainer">
            <div className="">PASSWORD</div>
            <div className='passContain'>
              <input name="password" value={password} onChange={(e)=>{ setPassword(e.target.value); }} type={visible_pass ? "text" : "password"} placeholder='Введите пароль' className="signUpPassword" />
              {
                eye_pass ? <img onClick={()=>{setEyePass(!eye_pass); setVisiblePass(!visible_pass)}} alt="eyeon" src={images.eye_on}  className="signUpPasswordEye"/>:
                <img onClick={()=>{setEyePass(!eye_pass); setVisiblePass(!visible_pass)}} alt="eyeoff" src={images.eye_off}  className="signUpPasswordEye"/>
              }
            </div>
          </div>
          <div className="signUpPasswordReplayContainer">
            <div className="">PASSWORD REPLAY</div>
            <div className='passContain'>
              <input  name="password_replay" value={password_replay} onChange={(e)=>{setPasswordReplay(e.target.value)}} type={visible_replay ? "text" : "password"} placeholder='Введите пароль еще раз' className="signUpPasswordReplay" />
              {
                eye_replay ? <img onClick={()=>{setEyeReplay(!eye_replay); setVisibleReplay(!visible_replay)}} alt="eyeon" src={images.eye_on}  className="signUpPasswordEye"/>:
                <img onClick={()=>{setEyeReplay(!eye_replay); setVisibleReplay(!visible_replay)}} alt="eyeoff" src={images.eye_off}  className="signUpPasswordEye"/>
              }
            </div>
          </div>
          <div style={{display: err ? "flex": "none" }} className="signUpErrContainer">
            <div style={{ color: errorColor ? "#2e7618" : "#c04d4d"}} className="signUpErr">{errText}</div>
          </div>
          <div className="signUpBtnContainer">
            <div onClick={async () => {
                if(password === password_replay) { 
                    if(password.length > 7) {
                      let errRigistation = await registration(email,password,dispatch);
                      if(typeof(errRigistation) === 'number') {
                        if(errRigistation === 400) {
                          setErrorForms(true);
                          setErrorColor(false);
                          setErrorText('Пользователь с почтовым адресом aspektpak@yandex.ru уже существует');
                        }
                      } else {
                        setErrorText('Пользователь зарегистрирован,подтвердите регистрацию в письме отправленным на указанный email'); 
                        setErrorColor(true);
                        setErrorForms(true);
                      }  
                      setEmail('');
                      setPassword('');
                      setPasswordReplay('');
                      clearTimeout(timerlength);
                      timerlength = setTimeout(() => {
                      setErrorForms(false);
                      setErrorColor(false);
                      if(typeof(errRigistation) !== 'number') { navigate('/'); }
                      }, 3000);
                    } else {
                      setErrorText('Длинна пароля от 8 символов'); 
                      setErrorForms(true);
                      clearTimeout(timerlength);
                      timerlength = setTimeout(() => {
                      setErrorForms(false);
                      }, 2000);
                    }  
                } else { 
                  setErrorForms(true);
                  clearTimeout(timer);
                  timer = setTimeout(() => {
                    setErrorForms(false);
                  }, 2000);
                }
               }} style={{ pointerEvents: (errEmail && email != '') ? 'all' : 'none',backgroundColor: (errEmail && email != '') ? '' : '#6e8391' }} className="signUpBtn">
              <div className="signUpBtntext">Зарегистрироваться</div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SignupWindow;