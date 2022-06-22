import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { TextInput, Table, ScrollArea, Button, Loader } from '@mantine/core';
import { TransactionContext } from '../../context/transactionContext/TransactionContext';
import { deleteTransaction, getTransactions } from '../../context/transactionContext/apiCalls';
import { Search } from 'tabler-icons-react';
import { Pagination } from '@mui/material';

const TransactionsList = () => {
  const { transactions, isFetching, dispatch } = useContext(TransactionContext);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTransactions(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteTransaction(id, dispatch);
  }

  return (
    <>
    <Helmet>
      <title>Manage Transactions |  Digitalbay</title>
      <meta name='description' content='Admin Transactions' />
    </Helmet>
    <TextInput
      size="md"
      placeholder="Search by User ID"
      onChange={(e) => setSearch(e.target.value)}
      rightSectionWidth={42}
      style={{ marginTop: '20px', marginBottom: '20px' }}
      icon={<Search size={24} color='black' />}
    />
    {isFetching ?
    <Loader color="violet" size="xl" variant="dots" style={{ padding: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}/>
    :
    <>
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm" style={{ justifyContent: 'center' }}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Purchased On</th>
            <th>Delete Transaction</th>
          </tr>
        </thead>
        <tbody>
        {
        transactions
        .slice((page - 1) * 10, (page - 1) * 10 + 10)
        ?.filter((transaction) => {
          if(search === ''){
            return true
          } else if(transaction.user.toLowerCase().includes(search.toLowerCase())){
            return true
          }
          return false
        })
        .map((transaction) => {
          return (
            <tr key={transaction._id}>
            <td>{transaction._id}</td>
            <td>{transaction.user}</td>
            <td>{transaction.createdAt}</td>
            <td>
              <Button type="Submit" variant="light" color="red" size="sm" onClick={() => handleDelete(transaction._id)}>Delete</Button>
            </td>
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

export default TransactionsList
