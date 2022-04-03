
import './App.css'; 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInvalidUrlAccess } from './routes/costomNavigation';
import Main from './routes/index';
import HeaderMenu from './components/HeaderMenu'
import { change_page, change_header_visible } from './redux/actions/app';
import { checkAuth } from './redux/actions/users'
import {pages, users} from './redux/selectors'
import { useNavigate } from 'react-router-dom';

function App () {
  // useInvalidUrlAccess();

  const dispatch = useDispatch();
  // const navigate = useNavigate()
  useEffect(() => {
    if(localStorage.getItem('token')) {
      checkAuth()
    }
  });
  if(useSelector(pages.page) === "signin") {
    dispatch(change_header_visible(false))
  } else {
    dispatch(change_header_visible(true))
  }

  return (
    <div className="App"> 
    <HeaderMenu 
      headerhim={()=> {
      dispatch(change_page("signin")) }} 
      userName="Addministrator" 
      visible={useSelector(pages.header_visible)} 
      page={useSelector(pages.page)} 
      onClick={(e) => { dispatch(change_page(e.target.id)); 
      }} 
    />
    <Main />
  </div>
  );
}

export default App;



server {
  index index.html;
  server_name botinviter.ru www.botinviter.ru;
  root /home/inbox/webapps/botinviter.ru/client/build;

  location / {
          try_files $uri.html $uri $uri/ =404;
  }

  location ~ /.well-known {
           allow all;
  }
listen 443 ssl; # managed by Certbot
ssl_certificate /etc/letsencrypt/live/botinviter.ru/fullchain.pem; # managed by Certbot
ssl_certificate_key /etc/letsencrypt/live/botinviter.ru/privkey.pem; # managed by Certbot
include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
if ($host = www.botinviter.ru) {
  return 301 https://$host$request_uri;
} # managed by Certbot

if ($host = botinviter.ru) {
  return 301 https://$host$request_uri;
} # managed by Certbot
  listen 80;
  server_name botinviter.ru www.botinviter.ru;
return 404; # managed by Certbot
}

server {
if ($host = botinviter.ru) {
  return 301 https://$host$request_uri;
} # managed by Certbot
  listen 89.223.124.38:80;
  server_name botinviter.ru www.botinviter.ru;
return 404; # managed by Certbot
}