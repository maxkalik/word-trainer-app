import React, { createContext, useContext, SetStateAction, useState } from 'react';

export interface UserValueTypes {
  uid: string | null;
  email: string | null;
}

type UserTypes = UserValueTypes | null;

const initialState: UserTypes = null;
const userDefaults: [UserTypes, React.Dispatch<SetStateAction<null>>?] = [initialState];

const UserContext = createContext(userDefaults);

const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => (
  <UserContext.Provider value={useState(initialState)}>{children}</UserContext.Provider>
);

export const useUserValue = () => useContext(UserContext);
export default UserProvider;
