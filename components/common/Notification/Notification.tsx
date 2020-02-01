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

const Notificaton: React.FC<{ visible: boolean; title: string }> = ({
  visible,
  title
}): JSX.Element | null => {
  const [visibility, setVisibility] = useState(visible);
  const [offset] = useState(new Animated.Value(-120));
  const [statusIOSBarHeight, setStatusIOSBarHeight] = useState(0);

  console.log(visibility);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      StatusBarManager.getHeight(({ height }: any) => {
        setStatusIOSBarHeight(height);
      });
    }
  }, []);

  // should be swipe gesture
  // react-native-swipe-gestures
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
  }, [offset, statusIOSBarHeight, visibility]);

  if (!visibility) {
    return null;
  }

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateY: offset }] }]}>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => setVisibility(false)}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Notificaton;
