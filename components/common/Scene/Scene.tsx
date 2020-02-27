import React from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import Spinner from '../Spinner/Spinner';
import { SceneProps } from './types';
import { styles } from './styles';

const Scene: React.FC<SceneProps> = ({ loading, children, keyboardAvoidingView }): JSX.Element => (
  <KeyboardAvoidingView behavior="padding" enabled={keyboardAvoidingView} style={{ flex: 1 }}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>{(loading && <Spinner />) || children}</View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

export default Scene;
