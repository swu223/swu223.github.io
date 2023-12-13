import React, { createContext, useMemo, useState, useEffect } from 'react'
import axios from 'axios';

export const BankContext = createContext();

export const BankProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [signedIn, setSignedIn] = useState(false);
  
  const bankContext = useMemo(()=>({
    users,
    setUsers,
    signedIn,
    setSignedIn
  }), [users, setUsers, signedIn,setSignedIn]);

  return (    
    <BankContext.Provider value={bankContext}>
      {children}
    </BankContext.Provider>
  )
};