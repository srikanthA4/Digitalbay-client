import React, { useEffect, useContext } from 'react';
import { SimpleGrid } from '@mantine/core';
import { ProductContext } from '../../../context/productContext/ProductContext';
import { getProducts } from '../../../context/productContext/apiCalls';
import { getTransactions } from '../../../context/transactionContext/apiCalls';
import { TransactionContext } from '../../../context/transactionContext/TransactionContext';
import { getUsers } from '../../../context/userContext/apiCalls';
import { UserContext } from '../../../context/userContext/UserContext';
import ProductStats from './ProductStats';
import SalesStats from './SalesStats';
import UserStats from './UserStats';

const Stats = () => {
  const { products, dispatch } = useContext(ProductContext);
  const { transactions } = useContext(TransactionContext);
  const { users } = useContext(UserContext);
  
  useEffect(() => {
    getProducts(dispatch);
    getTransactions(dispatch);
    getUsers(dispatch);
  }, [dispatch]);

  return (
	  <>
	  <SimpleGrid
	  cols={3}
	  breakpoints={[
      { maxWidth: 'md', cols: 2 },
      { maxWidth: 'xs', cols: 1 },
    ]}
    style={{ marginTop: '20px', marginBottom: '20px' }}
    >
      <ProductStats
      totalProducts={products.length}
      />
      <SalesStats
      totalSales={transactions.length}
      />
      <UserStats
      totalUsers={users.length}
      />
	  </SimpleGrid>
	  </>
  )
}

export default Stats;