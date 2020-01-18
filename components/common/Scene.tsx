import React from 'react';
import {
  KeyboardAvoidingView,
  ActivityIndicator,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView
} from 'react-native';

interface SceneProps {
  loading?: boolean;
  children: JSX.Element;
  keyboardAvoidingView: boolean;
}

const Scene: React.FC<SceneProps> = ({
  loading,
  children,
  keyboardAvoidingView
}): JSX.Element => (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior="padding"
    enabled={keyboardAvoidingView}>
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={Keyboard.dismiss}
      accessible={false}>
      <SafeAreaView style={styles.container}>
        {(loading && <ActivityIndicator size="large" />) || children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default Scene;
