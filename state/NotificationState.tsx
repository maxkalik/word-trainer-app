import React, { createContext, useContext, useReducer } from 'react';

const initialState = 'light';
const reducer = (initialState, action: string) => action;
const NotificationContext = createContext(initialState);
const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => (
  <NotificationContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </NotificationContext.Provider>
);

export const useNotificationValue = () => useContext(NotificationContext);
export default NotificationProvider;
