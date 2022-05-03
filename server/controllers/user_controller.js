const { validationResult } = require ('express-validator');
const userService = require('../services/users-service');
const VKService = require('../services/vk-servise');
const config = require('config');
const url_client = config.get('Server.URL.CLIENT');
const  ApiErr = require('../exeptions/api-error');
const axios = require('axios');

class UserController  {
  
  async registration(req,res,next) {
    try {
      const { email ,password } = req.body
      const userData = await userService.registration(email, password,res);
      res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly: true})
      return res.json(userData);
    } catch (e) {
      next(e)
    }
  }
  
  async registration_accounts_network(req,res,next) {
    try { 
      const { main_settings: { type_network }, user_accounts_info: { user_id, social_login, social_password } } = req.body;
      const url = `https://oauth.vk.com/token?grant_type=password&client_id=2274003&client_secret=hHbZxrka2uZ6jB1inYsH&username=${social_login}&password=${social_password}&v=5.131&2fa_supported=1`;
      const response = await axios.get(`${url}`);
      const { access_token, expires_in } = response.data;  // const { user_id, access_token, expires_in } = response.data;

      let temp = req.body;
      temp.isLogining = true;
      temp.main_settings.btn_state.map((item, key) => { if(key === 3 || key === 4 || key === 5) { item.disabled = true } else { item.disabled = false } return false })
      temp.user_accounts_info.user_vk_id = response.data.user_id;
      temp.user_accounts_info.access_token_vk = access_token;
      temp.user_accounts_info.expires_in = expires_in;

      const userData = await VKService.registration_accounts(type_network, user_id, temp, res);
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  
  async save_accounts_network(req,res,next) {
    try {
      const userData = await VKService.save_accounts( req.body );
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  
  async deleted_accounts(req,res,next) {
    try { 
      const userData = await VKService.deleted_accounts( req.body );
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  
  async login(req,res,next) {
    try {
      const { email ,password } = req.body;
      const userData = await userService.login(email, password,res);
      res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly: true})
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async activate(req,res,next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(url_client)
    } catch (e) {
      next(e);
    }
  }

  async refresh(req,res,next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie('refreshToken',userData.refreshToken,{ maxAge:30*24*60*60*1000, httpOnly: true })
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async getUserData(req,res,next) {
    try {
      const { body } = req.body;
      if(body !== undefined) {
        const user = await userService.getUserData(body);
        res.json(user);
      }
    } catch (e) {
      next(e);
    }
  }
  
  async logout(req,res,next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
     return res.json(token);
    } catch (e) {
      next(e);
    }
  }
  
  async upload(req, res, next) {
    try {
      const file = await userService.upload(req,res,next);
     return res.json(file);
    } catch (e) {
      next(e);
    }
  }

}

module.exports = new UserController();