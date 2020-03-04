import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { TrainerItemProps } from './types';
import { styles } from './styles';

const TrainerItem: React.FC<TrainerItemProps> = ({
  title,
  onPress,
  backgroundColor,
  imgSource
}): JSX.Element => (
  <TouchableOpacity style={[styles.container, { backgroundColor: backgroundColor }]} onPress={onPress}>
    <Image resizeMode="contain" source={imgSource} style={styles.illustration} />
    <Text style={styles.title} accessibilityRole="button">
      {title}
    </Text>
  </TouchableOpacity>
);

export default TrainerItem;
