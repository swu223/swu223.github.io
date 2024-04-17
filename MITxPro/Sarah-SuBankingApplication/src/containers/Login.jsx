import React from 'react';
import {Card, Button} from 'react-bootstrap';
import LoginPanel from '../components/LoginPanel';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <Card>
      <LoginPanel>        
      </LoginPanel>
      <div>Don't have an account? <a href="/create-account">here</a>.</div>
    </Card>
  )
};