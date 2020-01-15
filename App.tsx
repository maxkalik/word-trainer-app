import './fixtimerbug';
import React from 'react';
import { StateProvider } from './state';
import Content from './components/Content';
import { WordTypes } from './types';

const initialState = {
  words: []
};

const App: React.FC = (): JSX.Element => {
  const reducer = (state: { words: WordTypes[] }, action: any) => {
    switch (action.type) {
      case 'FETCHING_WORDS':
        return {
          ...state,
          words: action.words
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
