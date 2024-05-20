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
    const response = await this.userService.login(user);
    console.log('controller check response')
     return response;
  }

  async getData (user) {
    const response = await this.userService.getData(user);
    return response;
  }

  async transact (transaction) {
    const response = await this.userService.transact(transaction);
    return response;
  }
}