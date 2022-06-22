import React from 'react';
import { Helmet } from "react-helmet";
import { Title, Text, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const TransactionSuccess = () => {
  return (
    <>
    <Helmet>
      <title>Order Successful |  Digitalbay</title>
      <meta name='description' content='Order Successful' />
    </Helmet>
    <Title order={3} style={{ marginBottom: '10px' }}>Thank you for your order! ✅</Title>
    <Text size="md">Your order was accepted and we are working on it!</Text>
    <Link to='/account'>
      <Button variant='light' style={{ marginTop: '20px' }}>Go to your account</Button>
    </Link>
    </>
  )
}

export default TransactionSuccess
