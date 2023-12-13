import React, { createContext, useMemo, useState, useEffect } from 'react'
import axios from 'axios';

export const BankContext = createContext();

export const BankProvider = ({children}) => {
  const [data, setData] = useState("initial data");
  
  const bankContext = useMemo(()=>({
    data,
    setData
  }), [data, setData]);

  return (    
    <BankContext.Provider value={bankContext}>
      <h1>inside bank context: {data}</h1>
      {children}
    </BankContext.Provider>
  )
};