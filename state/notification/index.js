import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from './reducer';

export const NotificationContext = createContext();
const NotificationProvider = ({ children }) => (
  <NotificationContext.Provider value={useReducer(reducer, initialState)}>{children}</NotificationContext.Provider>
);
export const useNotificationValue = () => useContext(NotificationContext);

export default NotificationProvider;
