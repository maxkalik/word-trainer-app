import React, { useState } from 'react';
import firebase from 'firebase';
import { View, TextInput, SafeAreaView } from 'react-native';
import { Scene, Btn, Header } from '../../components/common';
import { styles } from './styles';

const ForgotPasswordScreen: React.FC<{ navigation: any }> = ({ navigation }): JSX.Element => {
  const [email, setEmail] = useState('');
  const handleBtnAuthPressed = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        navigation.goBack();
      })
      .catch(error => console.log(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Scene keyboardAvoidingView={true}>
        <Header backButton onPressBackButton={(): void => navigation.goBack()} />
        <View style={styles.container}>
          <TextInput
            placeholder="email"
            placeholderTextColor={'grey'}
            onChangeText={(value: string) => setEmail(value)}
            value={email}
          />
          <Btn filled title="Send new password" onPress={handleBtnAuthPressed} />
        </View>
      </Scene>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
