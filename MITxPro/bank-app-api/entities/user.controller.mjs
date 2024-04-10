import { UserService } from "./user.service.mjs";

export class UserController {
  constructor () {
    // wait for this
    this.userService = new UserService
  }

  async signup (user) {
    console.log('Controller: signup', user)
    //place the service call here
    const response = await this.userService.signup(user);
    console.log("controller level response:", response)
    if (Object.keys(response.errors).length === 0) {
    // confirm signup is successful
    return 'User Created';
    }

    return response;
  }

  async login (user) {
    console.log('Controller: login')
  }

}