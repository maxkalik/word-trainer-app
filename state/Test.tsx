import React, { createContext, useContext, useReducer, useState } from 'react';

const initialValue = '';
const testDefaults: [string?, React.Dispatch<string>?] = [initialValue];

const TestContext = createContext(testDefaults);

const TestProvider: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => {
  const [test, setTest] = useState(initialValue);
  return <TestContext.Provider value={[test, setTest]}>{children}</TestContext.Provider>;
};

export const useTestValue = () => useContext(TestContext);
export default TestProvider;
