import React from 'react';
import WordsProvider from './words';
import NotificationProvider from './notification';

const StateProvider: React.FC<{ children: JSX.Element }> = ({ children }): JSX.Element => (
  <NotificationProvider>
    <WordsProvider>{children}</WordsProvider>
  </NotificationProvider>
);

export default StateProvider;
