import React, { createContext, useContext, useState } from 'react';

export interface WordVluesTypes {
  word: string;
  translation: string;
}

export interface WordTypes extends WordVluesTypes {
  id: string;
}

const initialState: WordTypes[] = [];
const wordsDefaults: [WordTypes[], React.Dispatch<WordTypes[]>?] = [initialState];

const WordsContext = createContext(wordsDefaults);

const WordsProvider: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => (
  <WordsContext.Provider value={useState(initialState)}>{children}</WordsContext.Provider>
);

export const useWordsValue = () => useContext(WordsContext);
export default WordsProvider;
