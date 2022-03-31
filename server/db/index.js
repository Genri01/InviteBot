const { Users, Tokens, VK, TG, INST } = require('../db/models');
const db = require('./models/index')

const ApiErr = require('../exeptions/api-error');

class DB {

  async addInTables(table,obj) {
      switch (table) {
        case 'users':
          const user = await Users.create(obj);
          if (!user) {
            throw ApiErr.BadRequest(e.message)
          }
          return user;
        case 'tokens':
          const token = await Tokens.create(obj);
          if (!token) {
            throw ApiErr.BadRequest(e.message)
          }
          return token;
        default:
          break;
      }
  }
  
  async removeInTables() {

  }

  async searchInTables(table,key) {
    switch (table) {
      case 'users':
        const user = await Users.findOne({ where: key });
        return user;
      case 'tokens':
        const token = await Tokens.findOne({ where: key });
        return token;
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

  async getAdminItems() { // 
    let array_error = [];
    let object_result = {
    };
  
    let error_item = ['Admin_user'];
  
    try {
      let results = await Promise.all([
        Admin_user.findOne({where: { id: 1 }}),
      ]);
    
      results.map((element_promise,count) => {
        if (!element_promise || element_promise === null || element_promise === "" || element_promise.length === 0) {
          array_error.push(`Not elem in table for: ${error_item[count]}`);
        }
      
        if (element_promise !== null && element_promise.dataValues !== undefined && element_promise.dataValues.id !== undefined) {
          object_result.login = element_promise.dataValues.login,
          object_result.password = element_promise.dataValues.password,
          object_result.email = element_promise.dataValues.email,
          object_result.activationLink = element_promise.dataValues.activationLink,
          object_result.isActivated = element_promise.dataValues.isActivated
        }
      });
  
      object_result.errors = array_error;
      return object_result;
  
    } catch(error) {
      console.log(error)
      if(error.original !== undefined && error.original.code === 'ER_ACCESS_DENIED_ERROR') {
        array_error.push(`Произошла ошибка: ${error.original.sqlMessage}`);
        object_result.errors = array_error;
        return object_result;
      }
      array_error.push(`Произошла ошибка: ${error.msg}`);
      object_result.errors = array_error;
      return object_result;
    }
  }
  
  async getUsers() { //
    let array_error = [];
    let object_result = {
      users: [],
      errors: null
    };
    let error_item = ['Users'];
  
    // const NowBDformat = moment(moment().add(7, 'hours').format("YYYY-MM-DD HH:mm"));
  
    try {
      let results = await Promise.all([
        Users.findAll(),
      ]);
  
      results.map((element_promise,count) => {
  
        if (!element_promise || element_promise === null || element_promise === "" || element_promise.length === 0) {
          array_error.push(`Not elem in table for: ${error_item[count]}`);
        }
  
        if (Array.isArray(element_promise)) {  
          element_promise.map((elem) => {
            object_result.users.push({
              id: elem.dataValues.user_id,
              first_name: elem.dataValues.first_name,
              user_name: elem.dataValues.user_name,
              last_name: elem.dataValues.last_name,
              date_conection: elem.dataValues.date_conection,
              notification_request: elem.dataValues.notification_request,
            })
          })
        } else {
          // if (item !== null && item.dataValues !== undefined && item.dataValues.login !== undefined) {
          //   objResult.login = item.dataValues.login,
          //   objResult.password = item.dataValues.password,
          //   objResult.email_admin = item.dataValues.email
          // }
    
          // if (item !== null && item.dataValues !== undefined && item.dataValues.toogle_total_temp !== undefined) {
          //   objResult.toogle_total_temp = item.dataValues.toogle_total_temp,
          //   objResult.total_temp_min = item.dataValues.total_temp_min,
          //   objResult.total_temp_max = item.dataValues.total_temp_max,
          //   objResult.site_status_has_block = item.dataValues.site_status_has_block,
          //   objResult.mode_auto = item.dataValues.mode_auto,
          //   objResult.status_mode = item.dataValues.status_mode
          // }
        }
      });
  
      object_result.errors = array_error;
  
      return object_result;
  
    } catch(error) {
      if(error.original !== undefined && error.original.code === 'ER_ACCESS_DENIED_ERROR') {
        array_error.push(`Произошла ошибка: ${error.original.sqlMessage}`);
        object_result.errors = array_error;
        return object_result;
      }
      array_error.push(`Произошла ошибка: ${error.msg}`);
      object_result.errors = array_error;
      return object_result;
    }
  }
  
  async getUser(user_id) { //
    let array_error = [];
    let object_result = {
      user: {},
      errors: null
    };
  
    let error_item = ['Users'];
  
    try {
      let results = await Promise.all([
        Users.findOne({where: { user_id }}),
      ]);
  
      results.map((element_promise,count) => {
        if (!element_promise || element_promise === null || element_promise === "" || element_promise.length === 0 || element_promise === undefined) {
          array_error.push(`Not elem in table for: ${error_item[count]}`);
        }
        
        if (element_promise !== null && element_promise.dataValues !== undefined && element_promise.dataValues.id !== undefined) {
          object_result.user = {
            id: element_promise.dataValues.user_id,
            first_name: element_promise.dataValues.first_name,
            user_name: element_promise.dataValues.user_name,
            last_name: element_promise.dataValues.last_name,
            date_conection: element_promise.dataValues.date_conection,
            info_user: element_promise.dataValues.info_user
          }
        }
      });
  
      object_result.errors = array_error;
      return object_result;
  
    } catch(error) {
      if(error.original !== undefined && error.original.code === 'ER_ACCESS_DENIED_ERROR') {
        array_error.push(`Произошла ошибка: ${error.original.sqlMessage}`);
        object_result.errors = array_error;
        return object_result;
      }
      error.msg ? array_error.push(`Произошла ошибка: ${error.msg}`) : array_error.push(`Произошла ошибка: ${error}`);
      object_result.errors = array_error;
      return object_result;
    }
  }
  
   async putUser(user_id,body) { //
    Users.update(body, {
      where: {
        id:user_id,
      }
    })
    .then(result => {
      if (!result || result === null || result === "" || result[0] === 0) return console.log({msg: "Not user in table"})
       console.log("Update base succes")
    })
    .catch(error => {
      console.log(error)
    }) 
  }
  
   async putAdmin(body) {
    Admin_user.update(body, {
      where: {
        id: 1,
      }
    })
    .then(result => {
      if (!result || result === null || result === "" || result[0] === 0) return console.log({msg: "Not RESULT"})
       console.log("Update base succes")
    })
    .catch(error => {
      console.log(error.original)
    }) 
  }
  
   async createUser(obj) { //
    if(obj.id !== undefined) {
      Users.create({
        user_id: JSON.stringify(obj.id),
        user_name: obj.user_name !== undefined ? JSON.stringify(obj.user_name ): '',
        first_name: obj.first_name !== undefined ? JSON.stringify(obj.first_name): '',
        last_name: obj.last_name !== undefined ? JSON.stringify(obj.last_name ): '',
        date_conection: obj.date_conection !== undefined ? obj.date_conection : new Date(),
        info_user: JSON.stringify({
          active_page: obj.info_user.active_page !== undefined ? obj.info_user.active_page : '',
          text_request: obj.info_user.text_request !== undefined ? obj.info_user.text_request : '',
          date_last_request: obj.info_user.date_last_request !== undefined ? obj.info_user.date_last_request : new Date(),
          notification_request: obj.info_user.notification_request !== undefined ? obj.info_user.notification_request : JSON.stringify([{}])
        })
      })
      .then(result => {
        if (!result || result === null || result === "" || result[0] === 0) return console.log({msg: "Not user in table"})
         console.log("Create user in base succes")
      })
      .catch(error => {
        console.log(error.original.sqlMessage)
      }) 
    } else {
      console.log("NO CREATE USER.PLEASE ENTER ID !!!")
    }
  }
  
   async isUniqmUser(id) { //
    const { user, errors } = await getUser(id);
    console.log(user)
    if(errors.length > 0) {
      console.log(errors[0]);
      return true;
    }
    return false;
  }

}

module.exports = new DB();









