import React from 'react';
import { Text, Animated } from 'react-native';
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
    <Text style={styles.title}>Trainers</Text>
  </Animated.View>
);

export default TrainersListHeader;
