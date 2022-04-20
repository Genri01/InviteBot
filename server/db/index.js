const { Users, Tokens, VKs, TG, INST } = require('../db/models');
const db = require('./models/index')

const ApiErr = require('../exeptions/api-error');

class DB {

  async addInTables(table,obj) {
// console.log( JSON.stringify(obj),typeof(JSON.stringify(obj)))

      switch (table) {
        case 'users':
          const user = await Users.create(obj);

          if (!user) {
            throw ApiErr.BadRequest(e.message)
          }
          return user;
          break;
        case 'tokens':
          const token = await Tokens.create(obj);
          if (!token) {
            throw ApiErr.BadRequest(e.message)
          }
          break;
        case 'vk':
          const vk = await VKs.create({ user_id: obj.user_id, accounts: JSON.stringify(obj.accounts) });
          if (!vk) {
            throw ApiErr.BadRequest(e.message)
          }
          return vk;
          break;
        case 'tg':
          const tg = await TG.create(obj);
          if (!tg) {
            throw ApiErr.BadRequest(e.message)
          }
          return tg;
          break;
        default:
          break;
      }
  }
  
  async removeInTables(model,obj) {
    const mod = await model.destroy({
      where: {
        refreshToken: obj
      }
    });
    return mod;
  }

  async searchInTables(table,key) {
    switch (table) {
      case 'users':
        const user = await Users.findOne({ where: key });
        return user;
      case 'tokens':
        const token = await Tokens.findOne({ where: key });
        return token;
      case 'vk':
        const vk = await VKs.findOne({ where: key });
        return vk;
      case 'tg':
        const tg = await TG.findOne({ where: key });
        return tg;
      default:
        break;
    }

  }

  async updateModelTables(model,obj) {
    const mod = await model.update(obj);
    return mod;
  }

  async resetIncrementTables() {
    const query = await db.sequelize.query("ALTER TABLE Users AUTO_INCREMENT = 0;");
    const query1 = await db.sequelize.query("ALTER TABLE Tokens AUTO_INCREMENT = 0;");
    const query2 = await db.sequelize.query("ALTER TABLE Users AUTO_INCREMENT = 1;");
    const query3 = await db.sequelize.query("ALTER TABLE Tokens AUTO_INCREMENT = 1;");
    const query4 = await db.sequelize.query("ALTER TABLE Users AUTO_INCREMENT = 0;");
    const query5 = await db.sequelize.query("ALTER TABLE Tokens AUTO_INCREMENT = 0;");
  }

}

module.exports = new DB();









