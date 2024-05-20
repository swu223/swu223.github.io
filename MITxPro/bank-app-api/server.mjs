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
  origin: [
    'http://localhost:3000',
    'https://sarah-sufullstackbankingapp-fc44bdf5271b.herokuapp.com/'
  ]
}))

app.use(bodyParser.json());

app.get('/', (req,res)=>{
  res.send('Hello serverfolks');
})

app.post('/signup', async (req, res)=>{
  console.log("server level user: ", req.body.user)
  const response = await userControl.signup(req.body.user);
  res.send(JSON.stringify(response))
})

app.post('/login', async (req, res) =>{
  console.log('checking user: ', req.body.user);
  const response = await userControl.login(req.body.user);
  res.send(JSON.stringify(response))
})

app.post('/transaction/deposit', authorizeRequest,
async (req, res) => {
  let transaction = {...req.body.transaction, userID: req.userID}
  console.log('making deposit', transaction);
  const response = await userControl.transact(transaction);
  console.log('server transaction response: ', response)
  res.send(JSON.stringify(response));
  // res.send("received request")
})

app.post('/transaction/withdrawal', authorizeRequest, async (req, res) => {
  console.log('making withdrawal');
  const response = await userControl.transact(req.body.transaction);
  res.send(JSON.stringify(response));
})

app.get('/mydata', authorizeRequest, async (req, res) => {
  console.log("server", req.header('authorization'))
  console.log("server id: ", req.userID)
  const response = await userControl.getData(req.userID);
  res.send(JSON.stringify(response));
})

app.post('/test', authorizeRequest, (req,res) => {
  console.log(req.headers)
  res.send('This is hard')
})

app.listen(PORT, ()=>{
  console.log(`bank app server running on PORT:${PORT}`)
})