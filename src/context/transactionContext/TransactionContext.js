import TransactionReducer from './TransactionReducer';
import { createContext, useReducer } from 'react';

const INITIAL_STATE = {
  transactions: [],
  isFetching: false,
  error: false,
}

export const TransactionContext = createContext(INITIAL_STATE);

export const TransactionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, INITIAL_STATE);

  return (
    <TransactionContext.Provider
      value={{ 
        transactions: state.transactions,
        isFetching: state.isFetching, 
        error: state.error, 
        dispatch 
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}