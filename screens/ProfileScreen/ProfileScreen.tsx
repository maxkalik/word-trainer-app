import React, { useState } from 'react';
import firebase from 'firebase';
import { ScrollView, SafeAreaView } from 'react-native';
import { Btn, Swithcer, Section, ListItem } from '../../components/common';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useModeValue, useNotificationValue, useUserValue } from '../../state';
import { styles } from './styles';
import { colors } from '../../util/constants';

const ProfileScreen: React.FC = (): JSX.Element => {
  const [mode, setMode] = useModeValue();
  const [, setNotification] = useNotificationValue();
  const [loading, setLoading] = useState(false);
  const [user] = useUserValue();

  const isAnonymous = user && user.isAnonymous;

  const handleSwitchMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const handleSignOut = () => {
    setLoading(true);
    try {
      firebase.auth().signOut();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setNotification('Internal error. Please restart application');
      setLoading(false);
    }
  };

  const profileInfoSection = (
    <Section title="Profile" mode={mode}>
      <ListItem mode={mode} name="E-mail" value={user && user.email} />
    </Section>
  );

  const registrationSection = (
    <Section mode={mode} title="Registration">
      <AuthForm submitButtonName="Sign Up" requestType="link with credential" user={user} />
    </Section>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors[mode].COLOR_BACKGROUND }]}>
      <ScrollView style={styles.content}>
        {!isAnonymous && profileInfoSection}
        <Section title="Settings" mode={mode}>
          <Swithcer
            onValueChange={handleSwitchMode}
            value={mode === 'dark'}
            titleOn="Dark mode on"
            titleOff="Dark mode off"
          />
        </Section>
        {isAnonymous && registrationSection}
        <Btn title="Quit" size="small" onPress={handleSignOut} loading={loading} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
