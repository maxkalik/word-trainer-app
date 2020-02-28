import React from 'react';
import firebase from 'firebase';
import { View, Text, SafeAreaView } from 'react-native';
import { Scene, Btn } from '../../components/common';
import { styles } from './styles';

const ProfileScreen: React.FC = (props: any): JSX.Element => {
  // const validMsg = checkValidity(value, controls[type].validation);
  console.log(props);
  const handleBtnSignOut = () => {
    firebase.auth().signOut();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Scene keyboardAvoidingView={true}>
        <View>
          <Text>User</Text>
        </View>
        <Btn filled title="Sign Out" onPress={handleBtnSignOut} />
      </Scene>
    </SafeAreaView>
  );
};

export default ProfileScreen;
