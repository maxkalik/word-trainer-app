import React from 'react';
import { Animated } from 'react-native';
import { Title } from '../common';
import { styles } from './styles';

const TrainersListHeader: React.FC<{ offset: any }> = ({ offset }): JSX.Element => (
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
    <Title>Trainers</Title>
  </Animated.View>
);

export default TrainersListHeader;
