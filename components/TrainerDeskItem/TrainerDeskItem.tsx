import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { TrainerDeskItemProps } from './types';
import { deskItemStyle, itemTextStyle } from './styles';

const TrainerDeskItem: React.FC<TrainerDeskItemProps> = ({ name, onPress, isActive, disabled }): JSX.Element => {
  const deskStyles = [
    deskItemStyle.container,
    isActive === 'correct' && deskItemStyle.correct,
    isActive === 'hint' && deskItemStyle.hint,
    isActive === 'failed' && deskItemStyle.failed,
    disabled && isActive === null && deskItemStyle.disabled
  ];

  const deskTextStyles = [
    itemTextStyle.container,
    (isActive !== null && itemTextStyle.active) || (disabled && isActive === null && itemTextStyle.disabled)
  ];

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={deskStyles}>
      <Text style={deskTextStyles}>{name || 'Some Word'}</Text>
    </TouchableOpacity>
  );
};

export default TrainerDeskItem;
