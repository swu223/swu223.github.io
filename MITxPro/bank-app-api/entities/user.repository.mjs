//repository layer interacts with the db
import db from '../db.mjs'
import { User } from './user.model.mjs';
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class UserRepository {
  constructor() {
    db.connect();
  }

  async signup (user) {
    try{
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      let userData = await User.create(user);
      const token = jwt.sign({
        id: userData._id,
        name: userData.name
      }, process.env.JWT_SECRET);
      console.log('userData:',userData);
      return {
        id: userData._id,
        token
      }
    } 
    catch (err) {
      console.error(err);
      return err;
    }
  }

  async login (user) {
    try {
      console.log('repo level login')
      let dbUser = await User.findOne({email: user.email});
      console.log(dbUser);
      if (!dbUser) {
        throw new Error('User does not exist');
    }
      const isMatch = await bcrypt.compare(user.password, dbUser.password);
      if (!isMatch) {
          throw new Error("User name or password is incorrect");
      }
      const token = jwt.sign(
          { id: dbUser._id }, process.env.JWT_SECRET,
      );
      return { id: dbUser._id, token };
      }
    catch (err) {
      console.error(err);
      return err;
    }
  }

  async getData (user) {
    try {
      const {_id, name, balance:{current_balance,transactions}} = await User.findById(user);
      const relData = {
        _id,
        name, 
        balance:{
          current_balance,
          transactions
        }
      }
      console.log('repo level getData', relData)
      return relData;
    }
    catch (err) {
      console.error(err);
      return err;
    }
  }
}