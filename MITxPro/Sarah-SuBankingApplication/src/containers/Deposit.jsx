import React, { useState, useContext } from 'react';
import {Card} from 'react-bootstrap';
import TransactionPanel from '../components/TransactionPanel';
import { BankContext } from '../contexts/BankContext'
import { getData } from '../utils/endpoints/getData';
import { deposit } from '../utils/endpoints/appTransaction';

export default function Deposit() {
  const {data, setData, userID}  = useContext(BankContext);
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState('');
  
  // CHECK BREAKDOWN OF VARIABLES. CAN'T READ CURRENT BALANCE WHEN DEPOSITING
  const {_id, balance:{current_balance, transactions}} = data;

  const transactionType = "Deposit";
  
  //sets amount
  const handleChange = (e) => {
    setAmount(e.target.value)
  }
  
  // validate submission
  const validate = (amt) => {
    if (amt <= 0){
      setStatus("Cannot deposit 0 or negative amount. Try again")
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

    // let newBalance = Number(current_balance) + Number(amount);
    // console.log("newBalance:  ", newBalance)

    //submits transaction

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

    let depositConfirm = await deposit(newTransaction)

    if (depositConfirm && depositConfirm) {
      let updateData = await getData();
      console.log("updateData: ",updateData);
      //updates balance
      setStatus(`You have successfully deposited $${amount}`)
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