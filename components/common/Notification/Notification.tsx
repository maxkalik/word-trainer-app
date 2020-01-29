import React, { useState, useEffect } from 'react';
import {
  Animated,
  Text,
  Platform,
  NativeModules,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';

const { StatusBarManager } = NativeModules;

const Notificaton: React.FC<{ title: string }> = ({ title }): JSX.Element => {
  const [offset] = useState(new Animated.Value(-120));
  const [statusIOSBarHeight, setStatusIOSBarHeight] = useState(0);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      StatusBarManager.getHeight(({ height }: any) => {
        setStatusIOSBarHeight(height);
      });
    }
  }, []);

  // should be swipe gesture
  // react-native-swipe-gestures
  const handlePressed = () => {
    Animated.spring(offset, {
      toValue: -120
    }).start();
  };

  useEffect(() => {
    Animated.sequence([
      Animated.spring(offset, {
        toValue: statusIOSBarHeight
      }),
      Animated.delay(3000),
      Animated.timing(offset, {
        toValue: -120
      })
    ]).start();
  }, [offset, statusIOSBarHeight]);
  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateY: offset }] }]}>
      <TouchableOpacity style={styles.textContainer} onPress={handlePressed}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Notificaton;
