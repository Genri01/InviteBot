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
import { LocationContextProvider, BlockedSlashLinker } from './costomNavigation';

const Main = () => {
  return (
    <main>
     <LocationContextProvider>
          {/* <BlockedSlashLinker path='/signup' element={<SignupScreen />}/>
          <BlockedSlashLinker path='/' element={<SigninScreen />}/>
          <BlockedSlashLinker path='/forgot' element={<ForgotScreen />}/>
          <BlockedSlashLinker exact path='/main' element={<MainScreen />}/>
          <BlockedSlashLinker exact path='/accounts' element={<AccountScreen />}/>
          <BlockedSlashLinker exact path='/partners' element={<PartnersScreen />}/>
          <BlockedSlashLinker exact path='/news' element={<NewsScreen />}/>
          <BlockedSlashLinker exact path='/settings' element={<SettingsScreen />}/>
          <BlockedSlashLinker path="*" element={<div>404 not found</div>}></BlockedSlashLinker> */}
        <Routes>
          <Route path='/signup' element={<SignupScreen />}/>
          <Route path='/' element={<SigninScreen />}/>
          <Route path='/forgot' element={<ForgotScreen />}/>
          <Route exact path='/main' element={<MainScreen />}/>
          <Route exact path='/accounts' element={<AccountScreen />}/>
          <Route exact path='/partners' element={<PartnersScreen />}/>
          <Route exact path='/news' element={<NewsScreen />}/>
          <Route exact path='/settings' element={<SettingsScreen />}/>
          <Route path="*" element={<div>404 not found</div>}></Route>
        </Routes>
      </LocationContextProvider>
    </main>
  )
} 

export default Main;