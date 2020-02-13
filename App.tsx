import './fixtimerbug';
import React from 'react';
import { StateProvider } from './state';
import { initialState, reducer } from './state/reducer';
import Content from './components/Content/Content';

const App: React.FC = (): JSX.Element => (
  <StateProvider initialState={initialState} reducer={reducer}>
    <Content />
  </StateProvider>
);

export default App;
