import React, { createContext, useMemo, useState, useEffect } from 'react'
import axios from 'axios';

export const BankContext = createContext();

export const BankProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      _id  :        "sarahoneSatJan062024104836GMT0500EasternStandardTime",
      name:         "sarah one",
      email:        "sarah@sarah.com",
      password:     "Sarah2024!",
      date_created: "2024-04-12T19:38:33.776Z",
      balance     : {
        current_balance: 0,
        transactions:[]
      }
    }
]);
  const [signedIn, setSignedIn] = useState(false);
  const [userID, setUserID] = useState('');
  
  // in the future, implement a way to get data from a database

  // exports functions to be able to use in general.
  const bankContext = useMemo(()=>({
    data,
    setData,
    signedIn,
    setSignedIn,
    userID,
    setUserID
  }), [data, setData, signedIn,setSignedIn, userID, setUserID]);

  return (    
    <BankContext.Provider value={bankContext}>
      {children}
    </BankContext.Provider>
  )
};