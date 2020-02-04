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

const Notificaton: React.FC<{ title: string }> = ({
  title
}): JSX.Element | null => {
  const [titleTxt, setTitleTxt] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [offset] = useState(new Animated.Value(-120));
  const [statusIOSBarHeight, setStatusIOSBarHeight] = useState(0);

  useEffect(() => {
    setTitleTxt(title);
    setVisibility(title.length > 0);
  }, [title]);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      StatusBarManager.getHeight(({ height }: any) => {
        setStatusIOSBarHeight(height);
      });
    }
  }, []);

  useEffect(() => {
    if (visibility) {
      Animated.sequence([
        Animated.spring(offset, {
          toValue: statusIOSBarHeight
        }),
        Animated.delay(3000),
        Animated.timing(offset, {
          toValue: -120
        })
      ]).start();
    }
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
        <Text style={styles.title}>{titleTxt}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Notificaton;
