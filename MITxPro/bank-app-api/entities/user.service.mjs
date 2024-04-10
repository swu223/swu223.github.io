export class UserService {
  constructor () {

  }

  async validateUser(user) {
    const errors = {};
    if (!user.username) {
      errors.username = "username cannot be empty";
    }
    return errors;
  }

  async signup(user) {

  }

  async login(user) {

  }
}