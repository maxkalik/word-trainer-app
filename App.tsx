import './fixtimerbug';
import React, { useEffect, useState } from 'react';
import firebase from './firebase';
import { Spinner } from './components/common';
import Content from './components/Content/Content';
import AuthScreen from './screens/AuthScreen/AuthScreen';
import WordsProvider from './state/words';
import NotificationProvider from './state/notification';

const Main: React.FC<{ user: string }> = ({ user }): JSX.Element => (
  <WordsProvider>
    <Content user={user} />
  </WordsProvider>
);

const App: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((userData: any) => {
      userData ? setUser(userData) : setUser(null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return <NotificationProvider>{user ? <Main user={user} /> : <AuthScreen />}</NotificationProvider>;
};

export default App;
