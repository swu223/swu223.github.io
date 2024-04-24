import { UserRepository } from "./user.repository.mjs";
// often, this service layer authorizes user

export class UserService {
  constructor () {
    this.userRepo = new UserRepository();
  }

  async validateUser(user) {
    const errors = {};
    if (!user.name) {
      errors.name = "name cannot be empty";
    }
    return errors;
  }

  async validateLogin(user) {
    const errors = {};
    if (!user.email) {
      errors.email = "name cannot be empty";
    }
    return errors;
  }


  async signup(user) {
    console.log()
    const errors = await this.validateUser(user);
    console.log("service level errors:", errors)
    if (Object.keys(errors).length === 0) {
      // call repository level
      const response = await this.userRepo.signup(user);
      return response;
    }
    return { errors }
  }

  async login(user) {
    console.log( 'service level login: ')
    const errors = await this.validateLogin(user);
    if (Object.keys(errors).length === 0) {
      // call repository level
      const response = await this.userRepo.login(user);
      return response;
    }
    return { errors }
  }

  async getData (user) {
    const response = await this.userRepo.getData(user);
    return response;
  }
}