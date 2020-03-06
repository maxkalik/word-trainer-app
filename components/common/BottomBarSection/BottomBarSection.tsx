import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { sizes, colors } from '../../../util/constants';
import { BottomBarSectionProps } from './types';
import { styles } from './styles';

const BottomBarSection: React.FC<BottomBarSectionProps> = ({ offsetValue, children, mode }): JSX.Element => {
  const [offset] = useState(new Animated.Value(offsetValue));

  useEffect(() => {
    Animated.spring(offset, {
      toValue: -sizes.HEIGHT_GENERAL
    }).start();
  }, [offset]);

  const dinamicStyles = {
    transform: [{ translateY: offset }],
    backgroundColor: colors[mode].COLOR_BACKGROUND,
    borderTopColor: colors[mode].COLOR_BORDER
  };

  return <Animated.View style={[styles.container, dinamicStyles]}>{children}</Animated.View>;
};

export default BottomBarSection;
