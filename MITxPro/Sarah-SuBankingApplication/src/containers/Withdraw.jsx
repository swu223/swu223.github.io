import React, { useContext } from 'react';
import {Card} from 'react-bootstrap';
import TransactionPanel from '../components/TransactionPanel';
import { BankContext } from '../contexts/BankContext'

export default function Withdraw() {
  const {data, userID}  = useContext(BankContext);
  return (
    <Card>
    <TransactionPanel>
    </TransactionPanel>
    </Card>
  )
};