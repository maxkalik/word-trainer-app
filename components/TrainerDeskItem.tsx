import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface TrainerDeskItemProps {
  name: string;
  onPress: () => void;
  isActive: null | string;
  disabled: boolean;
}

const TrainerDeskItem: React.FC<TrainerDeskItemProps> = ({
  name,
  onPress,
  isActive,
  disabled
}): JSX.Element => {
  const deskStyles = [
    styles.container,
    isActive === 'right' && styles.right,
    isActive === 'failed' && styles.failed
  ];

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={deskStyles}>
      <Text>{name || 'Some Word'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    fontSize: 12,
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'silver'
  },
  right: { backgroundColor: 'green', color: 'white' },
  failed: { backgroundColor: 'red', color: 'white' }
});

export default TrainerDeskItem;
