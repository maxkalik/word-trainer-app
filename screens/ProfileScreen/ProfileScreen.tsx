import React, { useState } from 'react';
import firebase from 'firebase';
import { View, Text, SafeAreaView } from 'react-native';
import { Scene, Btn, Swithcer, Section } from '../../components/common';
import { useModeValue, useNotificationValue, useUserValue } from '../../state';
import { styles } from './styles';

const ProfileScreen: React.FC = (): JSX.Element => {
  const [{ mode }, dispatchMode] = useModeValue();
  const [loading, setLoading] = useState(false);
  const [, dispatchNotification] = useNotificationValue();
  const [{ user }] = useUserValue();
  console.log(mode);

  const handleSwitchMode = () => {
    dispatchMode({ mode: mode === 'light' ? 'dark' : 'light' });
  };

  const handleSignOut = () => {
    setLoading(true);
    try {
      firebase.auth().signOut();
      setLoading(false);
    } catch (error) {
      console.log(error);
      dispatchNotification({ msg: 'Internal error. Please restart application' });
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Section title="Profile">
          <View style={styles.listItem}>
            <Text style={[styles.listItemText, styles.listItemName]}>E-mail:</Text>
            <Text style={[styles.listItemText, styles.listItemValue]}>{user.email}</Text>
          </View>
        </Section>
        <Section title="Settings">
          <Swithcer
            onValueChange={handleSwitchMode}
            value={mode === 'dark'}
            titleOn="Dark mode on"
            titleOff="Dark mode off"
          />
        </Section>
        <Btn title="Sign Out" onPress={handleSignOut} loading={loading} />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
