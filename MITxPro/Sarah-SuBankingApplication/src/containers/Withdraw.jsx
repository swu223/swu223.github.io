import React, { useState, useContext } from 'react';
import {Card} from 'react-bootstrap';
import TransactionPanel from '../components/TransactionPanel';
import { BankContext } from '../contexts/BankContext';
import { getData } from '../utils/endpoints/getData';
import {withdraw} from '../utils/endpoints/appTransaction';

export default function Withdraw() {
  const {data, setData, userID}  = useContext(BankContext);
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState('');
  
  const {_id, balance:{current_balance, transactions}} = data;

  const transactionType = "Withdrawal";
  
  //sets amount
  const handleChange = (e) => {
    setAmount(e.target.value)
  }
  
  // validate submission
  const validate = (amt) => {
    if (amt > current_balance){
      setStatus("If you withdraw more than your account balance, you will be charged an overdraft fee.")
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    
    return true;
  }

  // submit amount to account function
  const handleClick = async (e) => {
    e.preventDefault();
    if (!validate(amount)) return;

    let newTransaction = {
      type: transactionType,
      amount: amount
    }
    // console.log("transaction: ", newTransaction)

    // let newBalance = Number(current_balance) - Number(amount);
    // console.log("newBalance:  ", newBalance)

    // //submits transaction
    // let updateData = data.map((acc) => {
    //   console.log("if acc matches userID", acc.account_id === userID);
    //   if( acc.account_id === userID) {
    //     return {
    //       ...acc, 
    //       balance:{
    //         current_balance:newBalance, 
    //         transactions:[...transactions, newTransaction]
    //       }  
    //     } 
    //   } 
    //   else return acc;
    // })

    let withdrawConfirm = await withdraw(newTransaction)

    if (withdrawConfirm && withdrawConfirm) {
      let updateData = await getData();
      console.log("updateData: ",updateData);
      //updates balance
      setStatus(`You have successfully withdrawn $${amount}`)
      setTimeout(() => setStatus(''),3000);
      setData(updateData);
    }
  }

  return (
    <Card>
    <TransactionPanel 
      current_balance={current_balance} 
      handleClick={handleClick}
      handleChange ={handleChange}
      noInput={!amount}
      >
    </TransactionPanel>
    {status && <div>{status}</div>}
    </Card>
  )
};