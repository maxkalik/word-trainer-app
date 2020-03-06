import './fixtimerbug';
import React from 'react';
import MainScreen from './screens/MainScreen/MainScreen';
import { ModeProvider } from './state';
import TestProvider from './state/Test';

const App: React.FC = (): JSX.Element => (
  <TestProvider>
    <ModeProvider>
      <MainScreen />
    </ModeProvider>
  </TestProvider>
);

export default App;
