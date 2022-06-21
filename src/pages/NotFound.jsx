import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Title, Text, Button } from '@mantine/core';

const NotFound = () => {
  return (
    <>
    <Helmet>
      <title>404 Not Found |  E-Commerce</title>
      <meta name='description' content='404 Not Found' />
    </Helmet>
    <Title order={3} style={{ marginBottom: '10px' }}>404 Page Not Found!</Title>
    <Text size="md">That page doesn't exist or you spelled something wrong</Text>
    <Link to='/'>
      <Button variant='light' style={{ marginTop: '20px' }}>Go to homepage</Button>
    </Link>
    </>
  )
}

export default NotFound