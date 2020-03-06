import React, { createContext, useContext, SetStateAction, useState } from 'react';

type UserTypes = object | null;

const initialState: UserTypes = null;
const userDefaults: [UserTypes, React.Dispatch<SetStateAction<null>>?] = [initialState];

const UserContext = createContext(userDefaults);

const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => (
  <UserContext.Provider value={useState(initialState)}>{children}</UserContext.Provider>
);

export const useUserValue = () => useContext(UserContext);
export default UserProvider;
