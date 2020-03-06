import React from 'react';
import { Header, Input } from '../common';
import VocabularyHeaderSettings from '../VocabularyHeaderSettings/VocabularyHeaderSettings';
import { VocabularyHeaderProps } from './types';
import { useModeValue } from '../../state/ModeState';
import { styles } from './styles';
import { colors } from '../../util/constants';

const VocabularyHeader: React.FC<VocabularyHeaderProps> = ({
  onChangeInputText,
  value,
  onClearBtnPress,
  onEditBtnPress,
  isEditBtnPressed
}): JSX.Element => {
  const [mode] = useModeValue();
  return (
    <Header>
      <Input
        placeholder="Find a word"
        style={styles.input}
        onChangeText={onChangeInputText}
        value={value}
        isEditMode={isEditBtnPressed}
        iconName="close"
        iconColor={colors[mode].COLOR_PRIMARY}
        touchableIcon
        onIconPress={onClearBtnPress}
        mode={mode}
      />
      <VocabularyHeaderSettings mode={mode} onPress={onEditBtnPress} isPressed={isEditBtnPressed} />
    </Header>
  );
};

export default VocabularyHeader;
