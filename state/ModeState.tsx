import React, { createContext, useContext, useState, SetStateAction } from 'react';

export type ModeTypes = 'light' | 'dark';

const initialState: ModeTypes = 'light';
const modeDefaults: [ModeTypes, React.Dispatch<SetStateAction<ModeTypes>>?] = [initialState];

const ModeContext = createContext(modeDefaults);

const ModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => (
  <ModeContext.Provider value={useState(initialState)}>{children}</ModeContext.Provider>
);

export const useModeValue = () => useContext(ModeContext);
export default ModeProvider;
