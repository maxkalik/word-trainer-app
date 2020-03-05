import React from 'react';
import { Animated } from 'react-native';
import { Title } from '../common';
import { styles } from './styles';

const TrainersListHeader: React.FC<{ offset: any; mode: 'light' | 'dark' }> = ({
  offset,
  mode
}): JSX.Element => (
  <Animated.View
    style={[
      styles.container,
      {
        transform: [
          {
            translateY: offset.interpolate({
              inputRange: [13, 15],
              outputRange: [0, 1]
            })
          }
        ]
      }
    ]}
  >
    <Title mode={mode}>Trainers</Title>
  </Animated.View>
);

export default TrainersListHeader;
