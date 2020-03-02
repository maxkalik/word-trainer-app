import React, { useState } from 'react';
import firebase from 'firebase';
import { View, Text, SafeAreaView } from 'react-native';
import { useNotificationValue, useUserValue } from '../../state';
import { Scene, Btn } from '../../components/common';
import { styles } from './styles';

const ProfileScreen: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [, dispatchNotification] = useNotificationValue();
  const [{ user }] = useUserValue();

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
      <Scene keyboardAvoidingView={true}>
        <View style={styles.container}>
          <View style={styles.info}>
            <Text style={styles.email}>{user.email}</Text>
          </View>
          <Btn
            title="Sign Out"
            onPress={handleSignOut}
            loading={loading}
            // addStyle={styles.submitBtn}
          />
        </View>
      </Scene>
    </SafeAreaView>
  );
};

export default ProfileScreen;
