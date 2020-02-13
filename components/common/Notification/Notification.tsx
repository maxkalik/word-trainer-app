import React, { useState, useEffect } from 'react';
import {
  Animated,
  Text,
  Platform,
  NativeModules,
  TouchableOpacity
} from 'react-native';
import { useStateValue } from '../../../state';
import { styles } from './styles';

const { StatusBarManager } = NativeModules;

const Notificaton: React.FC = (): JSX.Element | null => {
  const [{ notificationMsg }, dispatch] = useStateValue();
  const isNotificationPresent =
    notificationMsg !== null && notificationMsg.length > 0;
  const [visibility, setVisibility] = useState(false);
  const [offset] = useState(new Animated.Value(-120));
  const [statusIOSBarHeight, setStatusIOSBarHeight] = useState(0);

  console.log(visibility);

  useEffect(() => {
    setVisibility(isNotificationPresent);
    if (isNotificationPresent) {
      setTimeout(() => {
        dispatch({
          type: 'NOTIFICATION',
          notificationMsg: ''
        });
      }, 4000);
    }
  }, [dispatch, isNotificationPresent]);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      StatusBarManager.getHeight(({ height }: any) => {
        setStatusIOSBarHeight(height);
      });
    }
  }, []);

  useEffect(() => {
    if (isNotificationPresent) {
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
  }, [offset, statusIOSBarHeight, isNotificationPresent]);

  if (!visibility) {
    return null;
  }

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateY: offset }] }]}>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => setVisibility(false)}>
        <Text style={styles.title}>{notificationMsg}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Notificaton;
