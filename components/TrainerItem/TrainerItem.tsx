import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { TrainerItemProps } from './types';
import { styles } from './styles';

const TrainerItem: React.FC<TrainerItemProps> = ({ title, onPress, imgSource, backgroundImg }): JSX.Element => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.image}>
      <Image resizeMode="contain" source={imgSource} style={styles.illustration} />
      <Text style={styles.title} accessibilityRole="button">
        {title}
      </Text>
    </View>
    <Image resizeMode="stretch" source={backgroundImg} style={{ flex: 1 }} />
  </TouchableOpacity>
);

export default TrainerItem;
