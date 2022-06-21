import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { ProductContextProvider } from './context/productContext/ProductContext';
import { UserContextProvider } from './context/userContext/UserContext';
import { TransactionContextProvider } from './context/transactionContext/TransactionContext';
import { CartContextProvider } from './context/cartContext/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ProductContextProvider>
      <UserContextProvider>
        <TransactionContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </TransactionContextProvider>
      </UserContextProvider>
    </ProductContextProvider>
  </AuthContextProvider>
);