import './fixtimerbug';
import React from 'react';
import MainScreen from './screens/MainScreen/MainScreen';
import { ModeProvider } from './state';

const App: React.FC = (): JSX.Element => (
  <ModeProvider>
    <MainScreen />
  </ModeProvider>
);

export default App;
