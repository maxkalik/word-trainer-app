import './fixtimerbug';
import React, { useEffect } from 'react';
import initFirebase from './initFirebase';
import { StateProvider } from './state/useStateValue';
import Content from './components/Content';

interface Words {
  id: string;
  word: string;
  translation: string;
}

const App: React.FC = (): JSX.Element => {
  const initialState = {
    words: []
  };

  useEffect(() => {
    initFirebase();
  }, []);

  const reducer = (state: object, action: any) => {
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
