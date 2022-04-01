import $api from "../http";

export default class UsersServices {

  static fetchUsers() {
      return $api.get('/users')
  }

}
