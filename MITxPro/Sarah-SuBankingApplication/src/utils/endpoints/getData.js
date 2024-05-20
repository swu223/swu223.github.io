import axios from 'axios';

const getData = async () => {
  try{
    // asssumes token exists. set token data in the config
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    // wait for response from db
    const response = await axios.get("https://banking-app-api-f3a4b30ffab3.herokuapp.com/mydata", config);
    // puts the data into a data variable and returns it
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);
  }
}

export {getData}