import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { styles } from './styles';

const BottomBarSection: React.FC<{
  offsetValue: number;
  children: JSX.Element | JSX.Element[];
}> = ({ offsetValue, children }): JSX.Element => {
  const [offset] = useState(new Animated.Value(offsetValue));
  useEffect(() => {
    Animated.spring(offset, {
      toValue: 0
    }).start();
  }, [offset]);
  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateY: offset }] }]}>
      {children}
    </Animated.View>
  );
};

export default BottomBarSection;
