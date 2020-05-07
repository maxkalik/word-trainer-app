import React, { createContext, useContext, useState } from 'react';

const initialValue = '';
const notificationDefaults: [string?, React.Dispatch<string>?] = [initialValue];

const NotificationContext = createContext(notificationDefaults);

const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => (
  <NotificationContext.Provider value={useState(initialValue)}>{children}</NotificationContext.Provider>
);

export const useNotificationValue = () => useContext(NotificationContext);
export default NotificationProvider;
