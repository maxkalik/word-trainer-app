import React from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import Spinner from '../Spinner/Spinner';
import { SceneProps } from './types';
import { styles } from './styles';

const Scene: React.FC<SceneProps> = ({ loading, children, keyboardAvoidingView, addStyle }): JSX.Element => (
  <KeyboardAvoidingView behavior="padding" enabled={keyboardAvoidingView} style={styles.avoidingView}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[styles.container, addStyle]}>{(loading && <Spinner />) || children}</View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

export default Scene;
