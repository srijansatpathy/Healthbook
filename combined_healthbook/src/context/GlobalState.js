import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
    accounts: [],
    error: null,
    user: "",
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    // Actions
    async function getAccounts() {
      try {
        const res = await axios.get('http://localhost:4000/app/accounts');
  
        dispatch({
          type: 'GET_ACCOUNTS',
          payload: res.data.data
        });
      } catch (err) {
        dispatch({
          type: 'ACCOUNTS_ERROR',
          payload: err.response
        });
      }
    }

    function setCurrentUser(username) {
      dispatch({
        type: 'SET_USER',
        payload: username,
      });
    }
  
    return (<GlobalContext.Provider value={{
      accounts: state.accounts,
      error: state.error,
      user: state.user,
      getAccounts,
      setCurrentUser
    }}>
      {children}
    </GlobalContext.Provider>);
  }
  

