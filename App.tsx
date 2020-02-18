import './fixtimerbug';
import React from 'react';
import StateProvider from './state/StateProvider';
import Content from './components/Content/Content';

const App: React.FC = (): JSX.Element => (
  <StateProvider>
    <Content />
  </StateProvider>
);

export default App;
