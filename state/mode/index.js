import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from './reducer';

export const ModeContext = createContext();
const ModeProvider = ({ children }) => (
  <ModeContext.Provider value={useReducer(reducer, initialState)}>{children}</ModeContext.Provider>
);
export const useModeValue = () => useContext(ModeContext);

export default ModeProvider;
