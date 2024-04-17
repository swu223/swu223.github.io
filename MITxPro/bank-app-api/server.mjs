import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();
const PORT = 3001;
import { UserController } from './entities/user.controller.mjs';
import { authorizeRequest } from './middleware/jwtConfig.mjs';

// Configure dotenv
dotenv.config();

// initialize userController
const userControl = new UserController();

app.use(cors({
  origin: ['http://localhost:3000']
}))

app.use(bodyParser.json());

app.get('/', (req,res)=>{
  res.send('Hello serverfolks');
})

app.post('/signup', async (req, res)=>{
  console.log("server level user: ", req.body.acc)
  const response = await userControl.signup(req.body.acc);
  res.send(JSON.stringify(response))
})

app.get('/mydata', authorizeRequest, (req,res) => {
  console.log('my data will go here');
  res.send('here is data from server')
})

app.post('/test', authorizeRequest, (req,res) => {
  console.log(req.headers)
  res.send('This is hard')
})

app.listen(PORT, ()=>{
  console.log(`bank app server running on PORT:${PORT}`)
})