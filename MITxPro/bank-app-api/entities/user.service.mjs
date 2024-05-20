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
      errors.email = "email cannot be empty";
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
    try {
      console.log( 'service level login: ')
      const errors = await this.validateLogin(user);
      if (Object.keys(errors).length === 0) {
      // call repository level
      const response = await this.userRepo.login(user);
      console.log("service check response", response)
      return response;
    }
    return { errors }
  } catch (err) {
    console.log(err);
    return err;
  }
  }
jn
  async getData (user) {
    const response = await this.userRepo.getData(user);
    return response;
  }

  async transact ({type, amount, userID}) {
    // if it's a withdrawal, add money to the balance
    // if it's a deposit, decrease money from the balance
    console.log("service level transact", userID)

    // pass in user data, grab current balance amount, 
    let current_balance = await this.userRepo.getBalance(userID)
    console.log("service balance", current_balance)
    
    let newBalance = Number(0);

    if (type == 'Deposit') {
      // add validation for the deposits
      newBalance = Number(current_balance) + Number(amount)
    } else { newBalance = Number(current_balance) - Number(amount)}

    let full_transaction = {
      acc_Owner: userID, 
      starting_balance: current_balance, 
      transact_type: type,
      amount: amount,
      ending_balance: newBalance
    }
    // post a transaction

    let transaction_id = await this.userRepo.makeTransaction(full_transaction);
    // add transaction id to the user's transaction lists and update the balance
    // pass in userID, newBalance, transaction id
    // THINK ABOUT HOW YOU WANT TO PASS IN THIS INFORMATION. AS AN OBJECT???

    let updated_balance = {
      userID: userID,
      ending_balance: newBalance,
      transaction_id: transaction_id
    }

    const response = await this.userRepo.updateBalance(updated_balance)

    return response;
  }
}