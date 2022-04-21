const { validationResult } = require ('express-validator');
const userService = require('../services/users-service');
const VKService = require('../services/vk-servise');
const config = require('config');
const url_client = config.get('Server.URL.CLIENT');
const  ApiErr = require('../exeptions/api-error');

class UserController  {
  
  async registration(req,res,next) {
    try {
      // const errors = validationResult(res);
      // if(!errors.isEmpty()) return next(ApiErr.BadRequest('Ошибка при валидации',errors.array()));
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
      console.log(req.body,'@!# main_settings type_network')
      const { main_settings: { type_network }, user_accounts_info: { user_id } } = req.body;
      const userData = await VKService.registration_accounts(type_network, user_id, req.body, res);
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  
  async deleted_accounts(req,res,next) {
    try {
      console.log(req.body,'@!# main_settings type_network')
      const { accounts, user_id } = req.body;
      const userData = await VKService.deleted_accounts("vk", user_id, accounts, res);
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

}

module.exports = new UserController();