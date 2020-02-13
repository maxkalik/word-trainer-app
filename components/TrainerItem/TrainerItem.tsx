import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { TrainerItemProps } from './types';
import { styles } from './styles';

const TrainerItem: React.FC<TrainerItemProps> = ({ title, onPress }): JSX.Element => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.image}>
      <Text>Image</Text>
    </View>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default TrainerItem;
