import React, { useState } from 'react'
import { Title, Text, Table, ScrollArea } from '@mantine/core';
import { Pagination } from '@mui/material';

const Transactions = () => {
  const transactions = JSON.parse(localStorage.getItem('user')).transactionHistory;
  const [page, setPage] = useState(1);

  return (
    <>
    {
      transactions.length <= 0 ? 
      <>
      <Title order={3} style={{ marginBottom: '10px' }}>You haven't made any purchases yet</Title>
      <Text size="md">If you recently made a purchase, log out then log back in to see your order details</Text>
      </>
      :
      <>
      <Title order={3} style={{ marginBottom: '10px' }}>Your Transactions</Title>
      <Text size="md">Below is a list of your purchase history</Text>
      <Text size="md">If you recently made a purchase, log out then log back in to see your order details</Text>
      
      <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm" style={{ justifyContent: 'center' }}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Total</th>
              <th>Purchased On</th>
            </tr>
          </thead>
          
          <tbody>
            {
              transactions
              .reverse()
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((transaction) => {
                return (
                  <tr key={transaction._id}>
                    <td>{transaction._id}</td>
                    <td>${transaction.total}</td>
                    <td>{transaction.createdAt}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </ScrollArea>
      <Pagination
      count={(transactions?.length / 10).toFixed(0)}
      onChange={(_, value) => {
        setPage(value);
        window.scroll(0, 450);
      }}
      style={{ padding: 20, width: '100%', display: 'flex', justifyContent: 'center' }}
    />
      </>
    }
    </>
  )
}

export default Transactions;