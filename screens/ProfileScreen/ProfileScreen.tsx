import React, { useState } from 'react';
import firebase from 'firebase';
import { ScrollView, SafeAreaView } from 'react-native';
import { Btn, Swithcer, Section, ListItem } from '../../components/common';
import { useModeValue, useNotificationValue, useUserValue } from '../../state';
import { styles } from './styles';
import { colors } from '../../util/constants';

const ProfileScreen: React.FC = (): JSX.Element => {
  const [mode, setMode] = useModeValue();
  const [, setNotification] = useNotificationValue();
  const [loading, setLoading] = useState(false);
  const [user] = useUserValue();

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

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors[mode].COLOR_BACKGROUND }]}>
      <ScrollView style={styles.content}>
        <Section title="Profile" mode={mode}>
          <ListItem mode={mode} name="E-mail" value={user && user.email} />
        </Section>
        <Section title="Settings" mode={mode}>
          <Swithcer
            onValueChange={handleSwitchMode}
            value={mode === 'dark'}
            titleOn="Dark mode on"
            titleOff="Dark mode off"
          />
        </Section>
        <Btn title="Sign Out" size="small" onPress={handleSignOut} loading={loading} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
