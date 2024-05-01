import axios from 'axios';

const deposit = async (transaction) => {
  try{
    // asssumes token exists. set token data in the config
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    // wait for response from db
    const response = await axios.post("http://localhost:3001/transaction/deposit", {transaction}, config);
    // puts the data into a data variable and returns it
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);
  }
}

export {deposit}