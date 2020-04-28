import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import firebase from '../../firebase';
import { useColorScheme } from 'react-native-appearance';
import { Spinner } from '../../components/common';
import Content from '../../components/Content/Content';
import AuthScreen from '../../screens/AuthScreen/AuthScreen';
import { NotificationProvider, UserProvider, WordsProvider, useModeValue } from '../../state';
import { UserValueTypes } from '../../state/UserState';

const Main: React.FC<{ user: string }> = ({ user }): JSX.Element => (
  <UserProvider>
    <WordsProvider>
      <Content user={user} />
    </WordsProvider>
  </UserProvider>
);

const MainScreen: React.FC = (): JSX.Element => {
  const colorScheme = useColorScheme();
  const [mode, setMode] = useModeValue();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [statusMode, setStatusMode] = useState<'light-content' | 'dark-content'>('light-content');

  useEffect(() => {
    colorScheme === 'light' ? setMode('light') : setMode('dark');
    SplashScreen.hide();
  }, [colorScheme, setMode]);

  useEffect(() => {
    const modeContent = mode === 'light' ? 'dark-content' : 'light-content';
    setStatusMode(modeContent);
    const unsubscribe = firebase.auth().onAuthStateChanged(
      (userData: UserValueTypes | null): void => {
        userData ? setUser(userData) : setUser(null);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, [colorScheme, mode, setMode]);

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
