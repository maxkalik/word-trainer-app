import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { Title } from '../../components/common';
import { styles } from './styles';

const AuthTitle: React.FC<{ isFocused: boolean }> = ({ isFocused }): JSX.Element => {
  const [fade] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isFocused) {
      Animated.timing(fade, {
        toValue: 0,
        duration: 300
      }).start();
    } else {
      Animated.timing(fade, {
        toValue: 1,
        duration: 300
      }).start();
    }
  }, [fade, isFocused]);

  return (
    <Animated.View style={[styles.title, { opacity: fade }]}>
      <Title>Word Trainer App</Title>
    </Animated.View>
  );
};

export default AuthTitle;
