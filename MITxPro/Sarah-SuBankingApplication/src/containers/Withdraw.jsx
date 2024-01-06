import React, { useContext } from 'react';
import {Card} from 'react-bootstrap';
import TransactionPanel from '../components/TransactionPanel';
import { BankContext } from '../contexts/BankContext'

export default function Withdraw() {
  const {data, userID}  = useContext(BankContext);
  const userData = data.find((acc)=> acc.account_id === userID);
  const {account_id, balance:{current_balance, transactions}, user} = userData;

  const transactionType = "Withdrawal";
  return (
    <Card>
    <TransactionPanel>
    </TransactionPanel>
    </Card>
  )
};