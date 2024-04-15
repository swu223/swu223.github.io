import axios from 'axios';

const handleSignupDB = async (acc) => {
  try {
    //get the info from database
    const response = await axios.post("http://localhost:3001/signup", {
      acc
    })
    // if created, receive a token
    if (response.data.token) {
      console.log("received token in the front end: ", response.data.token)
      localStorage.setItem("token", response.data.token)
      console.log(acc.name, "was created via handleSignupDB")
      return true
    }
    // if not, return false
    return false
  } catch (err) {
    console.error(err);
    return false
  }
}

const handleLoginDB = async (loginInfo) => {
  try {
    if (localStorage.getItem("token")) {
      // if you just created acct, then make config wtih token and send to db and check if it matches
      const config = {
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
      const response = await axios.post(
        "http://localhost:3001/checktoken", 
        config, 
        {loginInfo}
      )
      if (response) {
        return true
      }
      return false;
    } else {
      //send login info to database
      const response = await axios.post("http://localhost:3001/login", {
        loginInfo
      })
      //if correct, receive a token
      if (response.data.token) {
        localStorage.setItem("token", response.data.token)
        return true
      } 
      // if not, return false
      return false 
    }
    
  
  } catch (err) {
    console.error(err);
    return false
  }
}

const handleLogoutDB = async (acc) => {
  // remove token
}

const checkToken = async (token, userInfo) => {
  console.log(token, userInfo)
  try {

  } catch (err) {
    console.error(err)
    return false
  }
}

export {handleSignupDB, handleLogoutDB, handleLoginDB, checkToken}