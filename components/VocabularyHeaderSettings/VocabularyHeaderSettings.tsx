import React from 'react';
import { Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { ModeTypes } from '../../state/ModeState';
import { colors } from '../../util/constants';
import { styles } from './styles';

interface VocabularyHeaderSettingsProps {
  onPress: (event: GestureResponderEvent) => void;
  isPressed: boolean;
  mode: ModeTypes;
}

const VocabularyHeaderSettings: React.FC<VocabularyHeaderSettingsProps> = ({
  onPress,
  isPressed,
  mode
}): JSX.Element => {
  const { COLOR_PRIMARY, COLOR_ACTIVE_CHECKED_TEXT } = colors[mode];
  const isPressedStyle = isPressed && styles.doneText && { color: COLOR_ACTIVE_CHECKED_TEXT };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={[styles.editText, { color: COLOR_PRIMARY }, isPressedStyle]}>
        {isPressed ? 'Done' : 'Edit'}
      </Text>
    </TouchableOpacity>
  );
};

export default VocabularyHeaderSettings;
