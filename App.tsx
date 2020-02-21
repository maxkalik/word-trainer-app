import './fixtimerbug';
import React from 'react';
import Content from './components/Content/Content';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import WordsProvider from './state/words';
import NotificationProvider from './state/notification';
import UserProvider from './state/user';
import { useUserValue } from './state/user';

const Main: React.FC = (): JSX.Element => (
  <NotificationProvider>
    <WordsProvider>
      <Content />
    </WordsProvider>
  </NotificationProvider>
);

const Auth: React.FC = (): JSX.Element => {
  const [{ user }] = useUserValue();
  console.log(user);
  return user ? <Main /> : <SignInScreen />;
};

const App: React.FC = (): JSX.Element => (
  <UserProvider>
    <Auth />
  </UserProvider>
);

export default App;
