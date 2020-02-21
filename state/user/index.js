import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from './reducer';

export const UserContext = createContext();
const UserProvider = ({ children }) => (
  <UserContext.Provider value={useReducer(reducer, initialState)}>{children}</UserContext.Provider>
);
export const useUserValue = () => useContext(UserContext);

export default UserProvider;
