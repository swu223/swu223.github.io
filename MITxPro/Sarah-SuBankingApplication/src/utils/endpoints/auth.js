import axios from 'axios';

const handleSignupDB = async (user) => {
  try {
    //get the info from database
    const response = await axios.post("https://banking-app-api-f3a4b30ffab3.herokuapp.com/signup", {
      user
    })
    // if created, receive a token
    if (response.data.token) {
      console.log("received token in the front end: ", response.data.token)
      localStorage.setItem("token", response.data.token)
      return response.data.id;
    }
    // if not, return false
    return false
  } catch (err) {
    console.error(err);
    return false
  }
}

const handleLoginDB = async (user) => {
  try {
    //if localStorage has a token already, just return true;
    if (localStorage.getItem("token")) {
      return true;
    } else {
      //if localStorage does not have token, then send login info to DB
      //send login info to database
      const response = await axios.post("https://banking-app-api-f3a4b30ffab3.herokuapp.com/login", {
        user
      })
      //if loginInfo is correct, we will receive a token
      if (response.data.token) {
        localStorage.setItem("token", response.data.token)
        console.log("auth: ", response.data.id)
        return true;
      } 
      // if not, return false
      return false 
    }
  } catch (err) {
    console.error(err);
    return false
  }
}

const handleLogoutDB = async () => {
  // remove token
  localStorage.removeItem('token')
}



export {handleSignupDB, handleLogoutDB, handleLoginDB}