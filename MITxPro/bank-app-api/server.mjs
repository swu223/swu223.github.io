import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
const app = express();
const PORT = 3000;
import db from './db.mjs';
import { UserController } from './entities/user.controller.mjs';

// Configure dotenv
dotenv.config();

//connect to MongoDB container
db.connect();

// initialize userController
const userControl = new UserController();

app.use(bodyParser.json());

app.get('/', (req,res)=>{
  res.send('Hello serverfolks');
})

app.post('/signup', async (req, res)=>{
  const response = await userControl.signup(req.body.user);
  res.send(response)
})

app.post('/test', async (req,res) => {
  res.send('This is hard')
})

app.listen(PORT, ()=>{
  console.log(`bank app server running on PORT:${PORT}`)
})