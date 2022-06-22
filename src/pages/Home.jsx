import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Title, Text, Button } from '@mantine/core';
import ProductsHome from '../components/ProductsHome';

const Home = () => {

  return (
    <>
    <Helmet>
      <title>Home | Digitalbay</title>
      <meta name='description' content='Home' />
    </Helmet>
    <Title order={2} style={{ marginBottom: '10px' }}> E-Commerce</Title>
    <Text size="md">The Best Prices.</Text>
    
    <Title order={3} style={{ marginTop: '10px' }}>Recent Products Added</Title>
    <ProductsHome />

    <Link to='/products'>
      <Button type="Submit" variant="light" size="sm" color="violet" style={{ marginTop: '20px', float: 'right' }}>View All Products</Button>
    </Link>
    </>
  )
}

export default Home;
