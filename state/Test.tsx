import React, { createContext, useContext, useState } from 'react';

const initialValue = '';
const testDefaults: [string?, React.Dispatch<string>?] = [initialValue];

const TestContext = createContext(testDefaults);

const TestProvider: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => (
  <TestContext.Provider value={useState(initialValue)}>{children}</TestContext.Provider>
);

export const useTestValue = () => useContext(TestContext);
export default TestProvider;
