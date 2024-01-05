import React, { createContext, useMemo, useState, useEffect } from 'react'
import axios from 'axios';

export const BankContext = createContext();

export const BankProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [signedIn, setSignedIn] = useState(false);
  
  // in the future, implement a way to get data from a database

  // exports functions to be able to use in general.
  const bankContext = useMemo(()=>({
    data,
    setData,
    signedIn,
    setSignedIn
  }), [data, setData, signedIn,setSignedIn]);

  return (    
    <BankContext.Provider value={bankContext}>
      {children}
    </BankContext.Provider>
  )
};