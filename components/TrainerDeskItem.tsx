import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

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
    deskItemStyle.container,
    isActive === 'correct' && deskItemStyle.correct,
    isActive === 'failed' && deskItemStyle.failed,
    disabled && isActive === null && deskItemStyle.disabled
  ];

  const deskTextStyles = [
    itemTextStyle.container,
    (isActive !== null && itemTextStyle.active) ||
      (disabled && isActive === null && itemTextStyle.disabled)
  ];

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={deskStyles}>
      <Text style={deskTextStyles}>{name || 'Some Word'}</Text>
    </TouchableOpacity>
  );
};

const deskItemStyle = StyleSheet.create({
  container: {
    padding: 15,
    fontSize: 12,
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'silver'
  },
  correct: { backgroundColor: 'green' },
  failed: { backgroundColor: 'red' },
  disabled: { backgroundColor: '#d8d8d8' }
});

const itemTextStyle = StyleSheet.create({
  container: {
    textAlign: 'center',
    color: 'black'
  },
  active: { color: 'white' },
  disabled: { color: 'grey' }
});

export default TrainerDeskItem;
