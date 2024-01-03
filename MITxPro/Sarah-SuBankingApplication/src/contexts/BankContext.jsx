import React, { createContext, useMemo, useState, useEffect } from 'react'
import axios from 'axios';

export const BankContext = createContext();

export const BankProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [signedIn, setSignedIn] = useState(false);
  
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