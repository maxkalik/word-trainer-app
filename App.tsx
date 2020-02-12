import './fixtimerbug';
import React from 'react';
import { StateProvider } from './state';
import Content from './components/Content/Content';

const initialState = {
  words: [],
  error: null
};

const App: React.FC = (): JSX.Element => {
  const reducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'FETCHING_WORDS':
        return {
          ...state,
          words: action.words
        };
      case 'FETCHING_FAILED':
        return {
          ...state,
          error: action.error
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Content />
    </StateProvider>
  );
};

export default App;
