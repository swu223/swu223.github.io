import React, { useState, useContext } from 'react';
import {Button, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BankContext } from '../contexts/BankContext';

export default function TransactionPanel() {
  return (
    <Card>
      <h1>Current Balance:</h1>
      Deposit
      <input type="number"></input>
      <input type ="submit"></input>
    </Card>
  )
};