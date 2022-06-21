import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { TextInput, Button, Title } from '@mantine/core';
import { At, User, Eye } from 'tabler-icons-react';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFinish = async (e) => {
    e.preventDefault();
    const newBody = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password
    }
    try {
      await axios.post('https://tranquil-brook-13044.herokuapp.com/api/auth/register', newBody);
      navigate('/login');
    } catch (error) {
      console.log('Error')
    }
  }

  return (
  <>
  <Helmet>
    <title>Register |  E-Commerce</title>
    <meta name='description' content='Register' />
  </Helmet>
  <Title order={1} style={{ marginBottom: '10px' }}>Register Account</Title>
  <TextInput
  placeholder="Enter a username"
  label="Username"
  id="username"
  size="md"
  icon={<User size={14} />}
  onChange={(e) => setUsername(e.target.value)}
  required
  />
  <TextInput
  placeholder="Enter your email"
  label="Email"
  id="email"
  size="md"
  icon={<At size={14} />}
  onChange={(e) => setEmail(e.target.value)}
  required
  />
  <TextInput
  placeholder="Enter your first name"
  label="First Name"
  id="firstName"
  size="md"
  onChange={(e) => setFirstName(e.target.value)}
  required
  />
  <TextInput
  placeholder="Enter your last name"
  label="Last Name"
  id="lastName"
  size="md"
  onChange={(e) => setLastName(e.target.value)}
  required
  />
  <TextInput
  placeholder="Create a password"
  label="Password"
  id="password"
  size="md"
  icon={<Eye size={14} />}
  type="password"
  onChange={(e) => setPassword(e.target.value)}
  required
  />
  
  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
  <Button type="Submit" variant="light" size="sm" onClick={handleFinish}>Register</Button>
  </div>

  </>
  )
}

export default Register;