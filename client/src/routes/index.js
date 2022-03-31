import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SigninScreen from '../Screens/SigninScreen/index';
import SignupScreen from '../Screens/SignupScreen/index';
import ForgotScreen from '../Screens/ForgotScreen/index';
import MainScreen from '../Screens/MainScreen/index';
import AccountScreen from '../Screens/AccountScreen/index';
import PartnersScreen from '../Screens/PartnersScreen/index';
import NewsScreen from '../Screens/NewsScreen/index';
import SettingsScreen from '../Screens/SettingsScreen/index';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/signup' element={<SignupScreen />}/>
        <Route path='/' element={<SigninScreen />}/>
        <Route path='/forgot' element={<ForgotScreen />}/>
        <Route exact path='/main' element={<MainScreen />}/>
        <Route exact path='/accounts' element={<AccountScreen />}/>
        <Route exact path='/partners' element={<PartnersScreen />}/>
        <Route exact path='/news' element={<NewsScreen />}/>
        <Route exact path='/settings' element={<SettingsScreen />}/>
      </Routes>
    </main>
  )
} 

export default Main;