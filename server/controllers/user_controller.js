const { validationResult } = require ('express-validator');
const userService = require('../services/users-service');
const config = require('config');
const url_client = config.get('Server.URL.CLIENT');
const  ApiErr = require('../exeptions/api-error');

class UserController  {
  
  async registration(req,res,next) {
    try {
      const errors = validationResult(res);
      if(!errors.isEmpty()) return next(ApiErr.BadRequest('Ошибка при валидации',errors.array()));
      const { email ,password } = req.body
      const userData = await userService.registration(email, password,res);
      res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly: true})
      return res.json(userData);
    } catch (e) {
      next(e)
    }
  }
  
  async login(req,res,next) {
    try {
     
    } catch (e) {

    }
  }

  async activate(req,res,next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect('http://ya.ru')
      // return res.redirect(url.Server.URL.CLIENT)
    } catch (e) {
      next(e);
    }
  }

  async refresh(req,res,next) {
    try {
   
    } catch (e) {
      next(e);
    }
  }

  async getUsers(req,res,next) {
    try {
      res.json(['123','31432','23','543'])
    } catch (e) {
      next(e);
    }
  }
  
  async logout(req,res,next) {
    try {
     
    } catch (e) {
      next(e);
    }
  }

  // getAdmin(req,res,next) {
  //   Admin_users.findOne({where: req.query})
  //   .then(ress => {
  //     if (!ress || ress === null || ress === "") return res.status(422).send({msg: "Not user in table"})
  //     res.send(ress.dataValues)
  //   })
  //   .catch(error => {
  //     res.status(error.statusCode).json({error:error.msg});
  //   }) 
  // }
  // getRigs(req,res,next) {
  //   My_rigs.findAll()
  //   .then(ress => {
  //     if (!ress || ress === null || ress === "") return res.status(422).send({msg: "Not user in table"})
  //     res.send(ress)
  //   })
  //   .catch(error => {
  //     res.status(error.statusCode).json({error:error.msg});
  //   }) 
  // }
  // getTempRigs(req,res,next) {
  //   Temp_rigs.findOne({where: req.query})
  //   .then(ress => {
  //     if (!ress || ress === null || ress === "") return res.status(422).send({msg: "Not user in table"})
  //     res.send(ress.dataValues)
  //   })
  //   .catch(error => {
  //     res.status(error.statusCode).json({error:error.msg});
  //   }) 
  // }
  // putRig(req,res,next) {
  //   const idRig = req.query.id;
  //   My_rigs.update(req.body, {
  //     where: {
  //       id: idRig,
  //     }
  //   })
  //   .then(ress => {
  //     if (!ress || ress === null || ress === "") return res.status(422).send({msg: "Not user in table"})
  //   res.status(200).send({msg: "Update base succes"})
  //   })
  //   .catch(error => {
  //     res.status(error.statusCode).json({error:error.msg});
  //   }) 
  // }
  // putUser(req,res,next) {
  //   const idRig = req.query.id;
  //   My_rigs.update(req.body, {
  //     where: {
  //       id: idRig,
  //     }
  //   })
  //   .then(ress => {
  //     if (!ress || ress === null || ress === "") return res.status(422).send({msg: "Not user in table"})
  //   res.status(200).send({msg: "Update base succes"})
  //   })
  //   .catch(error => {
  //     res.status(error.statusCode).json({error:error.msg});
  //   }) 
  // }
  // sendEmail(req,res,next) {
  //   const { formForgot } = req.body
  //   sendmail({
  //     from: `${formForgot}`,
  //     to: 'Spmain@mail54.ru',
  //     subject: `Запрос на восстонавление пароля от <${formForgot}>`,
  //     html: `Пользователь с ником ${formForgot.bold()} запрашивает пароль`,
  //   }, function(err, reply) {
  //     res.status(200).send({msg: "Email succes"})
  //   })
  // }
  // create(req,res,next) {
  //     const errors = validationResult(res);
  //     if(!errors.isEmpty()) {
  //       return res.status(422).json({errors:errors.array()})
  //     }

  //     Admin_users.findOne({where: { email:req.body.email }}).then(user=> {
  //       if(user) {
  //         return Promise.reject({statusCode: 422, msg: "error user"})
  //       } else {
  //         const {login, email ,password} = req.body
  //         return Admin_users.create({ login, email, password })
  //       }
  //     })
  //     .catch(error => {
  //       res.status(error.statusCode).json({error:error.msg});
  //     })
  //   }
}

module.exports = new UserController();