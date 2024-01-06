import React, { useContext } from 'react';
import {Card} from 'react-bootstrap';
import TransactionPanel from '../components/TransactionPanel';
import { BankContext } from '../contexts/BankContext'

export default function Deposit() {
  const {data, userID}  = useContext(BankContext);
  const userData = data.find((acc)=> acc.account_id === userID);
  console.log(userData)
  const {account_id, balance:{current_balance, transactions}, user} = userData;




  return (
    <Card>
    <TransactionPanel current_balance={current_balance}>
    </TransactionPanel>
    </Card>
  )
};