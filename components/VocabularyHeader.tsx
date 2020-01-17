import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Input } from './common';
// import { WordTypes } from '../types';

interface VocabularyHeaderProps {
  onChangeInputText: (_: string) => void;
  onClearBtnPress: () => void;
  onEditBtnPress: () => void;
  value: string;
  isEditBtnPressed: boolean;
}

const VocabularyHeader: React.FC<VocabularyHeaderProps> = ({
  onChangeInputText,
  value,
  onClearBtnPress,
  onEditBtnPress,
  isEditBtnPressed
}): JSX.Element => (
  <Header>
    <Input
      placeholder="Find a word"
      style={styles.input}
      onChangeText={onChangeInputText}
      value={value}
      onClearBtnPress={onClearBtnPress}
    />
    <TouchableOpacity style={styles.editBtn} onPress={onEditBtnPress}>
      <Text style={[styles.editBtnTxt, isEditBtnPressed && styles.doneBtnTxt]}>
        {isEditBtnPressed ? 'Done' : 'Edit'}
      </Text>
    </TouchableOpacity>
  </Header>
);

const styles = StyleSheet.create({
  input: {
    flex: 1
  },
  editBtn: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 20
    // borderWidth: 1,
    // borderColor: 'black'
  },
  editBtnTxt: {
    fontSize: 16
  },
  doneBtnTxt: {
    color: 'royalblue'
  }
});

export default VocabularyHeader;
