import axios from 'axios';
import { BankContext, data, setData } from '../../contexts/BankContext';

const getData = async (userID) => {
  try{
    // asssumes token exists. set token data in the config
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    // wait for response from db
    const response = await axios.get("http://localhost:3001/mydata", config);
    // puts the data into a data variable and returns it
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);
  }
}

export {getData}