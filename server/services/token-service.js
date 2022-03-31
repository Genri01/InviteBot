const jwt = require('jsonwebtoken');
const config = require('config');
const keys_access = config.get('Server.KEYS.JWT_SECRET_KEY_ACCESS');
const keys_refresh = config.get('Server.KEYS.JWT_SECRET_KEY_REFRESH');
const DB = require('../db/index');
const ApiErr = require('../exeptions/api-error');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, keys_access,{expiresIn: '30m'})
    const refreshToken = jwt.sign(payload, keys_refresh,{expiresIn: '30d'})
    return {
      accessToken,
      refreshToken
    }
  } 

  async saveToken(userId,refreshToken) {
    const tokens = await DB.searchInTables('tokens',{ userId });
    tokens ? await DB.updateModelTables(tokens,{ refreshToken }) : await DB.addInTables(tokens,{ userId, refreshToken });
  }
}

module.exports = new TokenService();