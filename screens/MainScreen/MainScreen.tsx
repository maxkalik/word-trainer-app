import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import { StatusBar } from 'react-native';
import { Spinner } from '../../components/common';
import Content from '../../components/Content/Content';
import AuthScreen from '../../screens/AuthScreen/AuthScreen';
import { NotificationProvider, UserProvider, WordsProvider, useModeValue } from '../../state';

const Main: React.FC<{ user: string }> = ({ user }): JSX.Element => (
  <UserProvider>
    <WordsProvider>
      <Content user={user} />
    </WordsProvider>
  </UserProvider>
);

const MainScreen: React.FC = (): JSX.Element => {
  const [{ mode }] = useModeValue();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [statusMode, setStatusMode] = useState<'light-content' | 'dark-content'>('light-content');

  useEffect(() => {
    const modeContent = mode === 'light' ? 'dark-content' : 'light-content';
    setStatusMode(modeContent);
    const unsubscribe = firebase.auth().onAuthStateChanged((userData: any) => {
      userData ? setUser(userData) : setUser(null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [mode]);

  const renderScreen = () => {
    if (loading) {
      return <Spinner />;
    }
    return user ? <Main user={user} /> : <AuthScreen />;
  };

  return (
    <NotificationProvider>
      <StatusBar barStyle={statusMode} animated />
      {renderScreen()}
    </NotificationProvider>
  );
};

export default MainScreen;
