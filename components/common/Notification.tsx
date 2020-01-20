import React, { useState, useEffect } from 'react';
import { Animated, Text, StyleSheet } from 'react-native';

const height = 120;

const Notificaton: React.FC<{ title: string }> = ({ title }): JSX.Element => {
  const [offset] = useState(new Animated.Value(-height));
  useEffect(() => {
    Animated.sequence([
      Animated.spring(offset, {
        toValue: 0
      }),
      Animated.delay(3000),
      Animated.timing(offset, {
        toValue: -height
      })
    ]).start();
  }, [offset]);
  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateY: offset }] }]}>
      <Text style={styles.title}>{title}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    zIndex: 99,
    height: height,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingBottom: 20
  },
  title: {
    fontSize: 18,
    textAlign: 'center'
  }
});

export default Notificaton;
