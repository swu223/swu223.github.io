export class UserController {
  constructor () {
    // wait for this
  }

  async signup (user) {
    console.log('Controller: signup')
    //place the service call here

    // confirm signup is successful
    return 'User Created'
  }

  async login (user) {
    console.log('Controller: login')
  }

}