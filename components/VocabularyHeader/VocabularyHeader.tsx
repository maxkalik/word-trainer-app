import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Header, Input } from '../common';
import { VocabularyHeaderProps } from './types';
import { styles } from './styles';

const VocabularyHeader: React.FC<VocabularyHeaderProps> = ({
  onChangeInputText,
  value,
  onClearBtnPress,
  onEditBtnPress,
  isEditBtnPressed
}): JSX.Element => (
  <Header withBottomLine>
    <Input
      placeholder="Find a word"
      style={styles.input}
      onChangeText={onChangeInputText}
      value={value}
      isEditMode={isEditBtnPressed}
      withIcon
      onIconPress={onClearBtnPress}
    />
    <TouchableOpacity style={styles.editBtn} onPress={onEditBtnPress}>
      <Text style={[styles.editBtnTxt, isEditBtnPressed && styles.doneBtnTxt]}>
        {isEditBtnPressed ? 'Done' : 'Edit'}
      </Text>
    </TouchableOpacity>
  </Header>
);

export default VocabularyHeader;
