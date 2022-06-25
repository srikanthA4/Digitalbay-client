import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import axios from 'axios';
import { TextInput, Title, Button, Switch } from '@mantine/core';
import { UserContext } from '../../context/userContext/UserContext';
import { updateUser } from '../../context/userContext/apiCalls';

const EditProduct = ({ editId, setEdit }) => {
	const admin = JSON.parse(localStorage.getItem('user')).isAdmin;
  const { dispatch } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [isAdmin, setisAdmin] = useState(false);
  
  useEffect(() => {
    const getUserData = async () => {
      const response = await axios.get(`https://tranquil-brook-13044.herokuapp.com/api/users/find/${editId}`);
      const data = response.data.info;
      setEmail(data.email);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setProfilePic(data.profilePic);
      setisAdmin(data.isAdmin);
    }
    getUserData();
  }, [editId]);

  const handleUpdate = () => {
    const updatedData = {
      id: editId,
      email: email,
      username: username,
      firstName: firstName,
      lastName: lastName,
      profilePic: profilePic,
      isAdmin: isAdmin,
    }
    updateUser(updatedData, dispatch);
    setEdit(false);
  }

  return (
    <>
    <Helmet>
      <title>Edit {username} | Apple E-Commerce</title>
      <meta name='description' content='Edit Account' />
    </Helmet>
    {
      admin ? 
      <>
      <Title order={2}>Edit {username}</Title>
      <TextInput
      label="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      id="email"
      size="md"
      required
      />
      <TextInput
      label="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      id="username"
      size="md"
      required
      />
      <TextInput
      label="First Name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      id="firstName"
      size="md"
      required
      />
      <TextInput
      label="Last Name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      id="lastName"
      size="md"
      required
      />
      <TextInput
      label="Account Avatar"
      value={profilePic}
      onChange={(e) => setProfilePic(e.target.value)}
      id="profilePic"
      size="md"
      required
      />
      <Switch 
      label="Admin Control" 
      size="md" 
      id="isAdmin" 
      checked={isAdmin}
      onChange={() => setisAdmin(!isAdmin)} 
      style={{ marginTop: '10px' }}
      />

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Button type="Submit" variant="light" size="sm" onClick={handleUpdate}>Update User</Button>
      </div>
    </>
      :
    <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}><Title order={3}>You do not have permission to access this</Title></div>
    }
    </>
  )
}

export default EditProduct
