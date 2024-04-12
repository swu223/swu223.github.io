import axios from 'axios';

const handleSignupDB = async (acc) => {
  try {
    console.log(acc.user.name, "was created via handleSignupDB")
    //get the info from database
    // if created, receive a token
    // if not, return false
  } catch (err) {
    console.error(err);
    return false
  }
}

const handleLoginDB = async (acc) => {
  try {
    console.log(acc)
    //send login info to database
    //if correct, receive a token
    // if not, return false
  } catch (err) {
    console.error(err);
    return false
  }
}

const handleLogoutDB = async (acc) => {
  // remove token
}

export {handleSignupDB, handleLogoutDB, handleLoginDB}