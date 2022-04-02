import React, {
  useState
} from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
import { login } from '../../redux/actions/users';
import { change_header_visible,change_page } from '../../redux/actions/app';
import { useInvalidUrlAccess, BlockedSlashLinker } from '../../routes/costomNavigation';
import { useNavigate } from 'react-router-dom';

function SigninWindow () {

  // useInvalidUrlAccess();

  const [form_login, setEmail] = useState('');
  const [form_password, setPassword] = useState('');
  const [err, setErrorInpusts] = useState(false);
  const [errText, setErrorText] = useState('Пользователь  не найден в базе данных');

  const dispatch = useDispatch();
  const navigate = useNavigate();

var error_timer = ''
  return (
    <div className="signinWindowWrapper">
      <div className="signinImageContainer" />
      <div className="signinInfoContainer">
        <div className="signinLoginContainer">
          <div>LOGIN</div>
          <input onChange={(e) => setEmail(e.target.value)} value={form_login} name="form_login" placeholder='Введите почту' className="signinLogin" />
        </div>
        <div className="signinPasswordContainer">
          <div>PASSWORD</div>
          <input type="password" value={form_password} onChange={(e) => setPassword(e.target.value)} name="form_password" placeholder='Введите пароль' className="signinPassword" />
        </div>
        <div className="signinMemberContainer">
          <div className="signinMemberContainerleft">
            <input type="checkbox" name="membercheck" className="chekbox"></input>
            <div>запомни меня</div>
          </div>
          <div className="signinMemberContainerRightBox">
            <BlockedSlashLinker to='/forgot'>забыли пароль?</BlockedSlashLinker>
          </div>
        </div>
        <div className="signinBtnContainer">
          <div onClick={async () => {
                let userLogin = await login(form_login,form_password,dispatch);
                if(userLogin?.status === 400) {
                  setErrorInpusts(true);
                  setErrorText(userLogin.msg);
                  setEmail('');
                  setPassword('');
                  clearTimeout(error_timer);
                  error_timer = setTimeout(() => {
                  setErrorInpusts(false);
                  }, 3000);
                } 

                if(userLogin?.status === 200) {
                  if (userLogin?.data?.user?.isActivated) {
                    dispatch(change_header_visible(true))
                    dispatch(change_page("main"))
                    navigate('/main');
                  } else {
                    setErrorInpusts(true);
                    setErrorText('Подтвердите регистрацию в письме :');
                    setEmail('');
                    setPassword('');
                    clearTimeout(error_timer);
                    error_timer = setTimeout(() => {
                    setErrorInpusts(false);
                    }, 3000);
                  }
                } 
              }} className="signinBtn">
            <div onClick={()=>{ }} className="signinBtntext">Войти</div>
          </div>
        </div>
        <div className="signinAutorizationContainer">
          <div style={{display: err ? "flex": "none"}} className='errorLogin'>{errText}</div> 
            <BlockedSlashLinker to='/signup' className="signinAutorizeText">Зарегистрироваться</BlockedSlashLinker>
        </div>
      </div>
    </div>
  );
}

export default SigninWindow;