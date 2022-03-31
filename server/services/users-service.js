const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const DB = require('../db/index');
const UserDto = require('../dtos/user-dto');

const ApiErr = require('../exeptions/api-error');

const config = require('config');
const url_api = config.get('Server.URL.API');

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class UserService {
 async registration (email, password) {
    try {
      const condidate = await DB.searchInTables('users',{ email });
      if(condidate) {
        throw ApiErr.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
      } else {
        const hashPassword = await bcrypt.hash(password, random(1,10));
        const activationLink = uuid.v4();
        const user = await DB.addInTables('users',{ email, password : hashPassword, activationLink,isActivated: false,role: "user" });
        const userDto = new UserDto(user);
        const tokens = tokenService.generateToken({...userDto});
        await tokenService.saveToken(userDto.userId,tokens.refreshToken);
        mailService.sendAcnivationMail(email,`${url_api}/api/activate/${activationLink}`);
        return {
          ...tokens,
          user: userDto
        }
      }
    } catch(e) {
      throw ApiErr.BadRequest(e.message)
    }

 }

  async activate (activationLink) {
    const user = await DB.searchInTables('users',{ activationLink });
    if(!user) {
      throw ApiErr.BadRequest('url in not correctly')
    }
    await DB.updateModelTables(user,{ isActivated: true });
  }
}

module.exports = new UserService();
