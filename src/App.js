import React, { useContext } from 'react';
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Container } from '@mantine/core';
import { AuthContext } from './context/authContext/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductsPage from './pages/Products';
import User from './pages/User';
import Cart from './pages/Cart';
import AddProduct from './pages/AddProduct';
import TransactionSuccess from './pages/TransactionSuccess';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
    <BrowserRouter>
    <Helmet>
      <title> Digitalbay</title>
      <meta name='title' content='Digitalbey' />
//      <meta name='title' content='Apple E-Commerce' />
      <meta name='description' content='An E-Commerce web app built with React.' />
      <meta property="og:title" content='Apple E-Commerce' />
      <meta property="og:description" content='An E-Commerce web app built with React.' />
      <meta property="og:image" content='%PUBLIC_URL%/preview.png' />
    </Helmet>
    <Container>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={user ? <ProductsPage /> : <Login />} />
      <Route path='/account' element={user ? <User /> : <Login />} />
      <Route path='/account/add-product' element={user ? <AddProduct /> : <Home />} />
      <Route path='/order-accepted' element={user ? <TransactionSuccess /> : <Login />} />
      <Route path='/login' element={user ? <User /> : <Login />} />
      <Route path='/register' element={user ? <Home /> : <Register />} />
      <Route path='/cart' element={user ? <Cart /> : <Login />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <Footer />
    </Container>
    </BrowserRouter>
    </>
  );
}

export default App
