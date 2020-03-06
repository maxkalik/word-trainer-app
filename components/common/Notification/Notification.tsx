import React, { useState, useEffect } from 'react';
import { Animated, Text, Platform, NativeModules, TouchableOpacity } from 'react-native';
import { useModeValue, useNotificationValue } from '../../../state';
import { styles } from './styles';
import { colors } from '../../../util/constants';

const { StatusBarManager } = NativeModules;

const Notificaton: React.FC = (): JSX.Element | null => {
  const [notification, setNotification] = useNotificationValue();
  const [mode] = useModeValue();
  const isNotificationPresent = notification ? notification.length > 0 : false;
  const [visibility, setVisibility] = useState(false);
  const [offset] = useState(new Animated.Value(-120));
  const [statusIOSBarHeight, setStatusIOSBarHeight] = useState(0);

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
      ]).start(() => setNotification(''));
    }
  }, [offset, statusIOSBarHeight, isNotificationPresent, setNotification, visibility]);

  if (!visibility) {
    return null;
  }

  const dinamicStyles = { transform: [{ translateY: offset }] };
  const modeStyles = { backgroundColor: colors[mode].COLOR_BACKGROUND_NOTIFICATION };
  const titleStyles = { ...styles.title, color: colors[mode].COLOR_PRIMARY };

  return (
    <Animated.View style={[styles.container, dinamicStyles]}>
      <TouchableOpacity style={[styles.textContainer, modeStyles]} onPress={() => setNotification('')}>
        <Text style={titleStyles}>{notification}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Notificaton;
