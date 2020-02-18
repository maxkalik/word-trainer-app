import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from './reducer';

export const WordsContext = createContext();
const WordsProvider = ({ children }) => (
  <WordsContext.Provider value={useReducer(reducer, initialState)}>{children}</WordsContext.Provider>
);
export const useWordsValue = () => useContext(WordsContext);

export default WordsProvider;
