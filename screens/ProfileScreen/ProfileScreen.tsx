import React, { useState } from 'react';
import firebase from 'firebase';
import { ScrollView, View, Text, SafeAreaView } from 'react-native';
import { Btn, Swithcer, Section } from '../../components/common';
import { useModeValue, useNotificationValue, useUserValue } from '../../state';
import { styles } from './styles';

const ProfileScreen: React.FC = (): JSX.Element => {
  const [{ mode }, dispatchMode] = useModeValue();
  const [loading, setLoading] = useState(false);
  const [, dispatchNotification] = useNotificationValue();
  const [{ user }] = useUserValue();

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
      <ScrollView style={styles.content}>
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
        <Btn title="Sign Out" size="small" onPress={handleSignOut} loading={loading} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
