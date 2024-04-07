import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = 3000;
import db from './db.mjs';

app.use(bodyParser.json());

app.get('/', (req,res)=>{
  res.send('Hello serverfolks');
})

app.post('/test'), async (req,res) => {
  
}

app.listen(PORT, ()=>{
  console.log(`bank app server running on PORT:${PORT}`)
})