import { UserRepository } from "./user.repository.mjs";

export class UserService {
  constructor () {
    this.userRepository = new UserRepository();
  }

  async validateUser(user) {
    const errors = {};
    if (!user.username) {
      errors.username = "username cannot be empty";
    }
    return errors;
  }

  async signup(user) {
    const errors = await this.validateUser(user);
    console.log("service level errors:", errors)
    if (Object.keys(errors).length === 0) {
      // call repository level
      const response = await this.userRepository.signup(user);
    }
    return { errors }
  }

  async login(user) {

  }
}