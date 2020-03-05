import React, { createContext, useContext, useReducer } from 'react';

export type ModeTypes = 'light' | 'dark';

const initialState = 'light';
const reducer = (state = initialState, action: ModeTypes) => action;
const ModeContext = createContext(initialState);
const ModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => (
  <ModeContext.Provider value={useReducer(reducer, initialState)}>{children}</ModeContext.Provider>
);

export const useModeValue = () => useContext(ModeContext);
export default ModeProvider;
