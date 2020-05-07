import React, { useState, useEffect } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';

const FadedView: React.FC<{
  isFaded: boolean;
  style?: StyleProp<ViewStyle>;
  children: JSX.Element | JSX.Element[];
}> = ({ isFaded, style, children }): JSX.Element => {
  const [fade] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isFaded) {
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
  }, [fade, isFaded]);

  return (
    <Animated.View pointerEvents={isFaded ? 'none' : 'auto'} style={[style, { opacity: fade }]}>
      {children}
    </Animated.View>
  );
};

export default FadedView;
