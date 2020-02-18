import React, { useState, useEffect } from 'react';
import { Animated, Text, Platform, NativeModules, TouchableOpacity } from 'react-native';
import { useNotificationValue } from '../../../state/notification';
import { styles } from './styles';

const { StatusBarManager } = NativeModules;

const Notificaton: React.FC = (): JSX.Element | null => {
  const [{ notificationMsg }, dispatchNotification] = useNotificationValue();
  const isNotificationPresent = notificationMsg !== null && notificationMsg.length > 0;
  const [visibility, setVisibility] = useState(false);
  const [offset] = useState(new Animated.Value(-120));
  const [statusIOSBarHeight, setStatusIOSBarHeight] = useState(0);

  const notificationsFinished = { type: 'NOTIFICATION', notificationMsg: '' };

  useEffect(() => {
    if (Platform.OS === 'ios') {
      StatusBarManager.getHeight(({ height }: any) => {
        setStatusIOSBarHeight(height);
      });
    }
  }, []);

  useEffect(() => {
    setVisibility(isNotificationPresent);
    if (isNotificationPresent && visibility) {
      Animated.stagger(3000, [
        Animated.spring(offset, {
          toValue: statusIOSBarHeight
        }),
        Animated.timing(offset, {
          toValue: -120
        })
      ]).start(() => dispatchNotification(notificationsFinished));
    }
  }, [offset, statusIOSBarHeight, isNotificationPresent, dispatchNotification, visibility, notificationsFinished]);

  if (!visibility) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: offset }] }]}>
      <TouchableOpacity style={styles.textContainer} onPress={() => dispatchNotification(notificationsFinished)}>
        <Text style={styles.title}>{notificationMsg}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Notificaton;
