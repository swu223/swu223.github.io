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
    // confirm signup is successful
    return response;
    }


  async login (user) {
    console.log('Controller level login')
  }

  async getData () {
    const response = await this.userService.getData();
    return response;
  }
}