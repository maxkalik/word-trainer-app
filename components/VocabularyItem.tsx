import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox } from './common';
import VocabularyWordItem from './VocabularyWordItem';
import { WordTypes } from '../types';

interface VocabularyItemProps {
  wordItem: WordTypes;
  checkBox?: boolean;
  checked: boolean;
  onCheckmarkPress: () => void;
}

const VocabularyItem: React.FC<VocabularyItemProps> = ({
  wordItem,
  checkBox,
  checked,
  onCheckmarkPress
}): JSX.Element => (
  <View style={styles.container}>
    {checkBox && <Checkbox checked={checked} onPress={onCheckmarkPress} />}
    <VocabularyWordItem item={wordItem} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // borderBottomColor: 'black',
    // borderBottomWidth: 1,
    height: 50,
    alignItems: 'center'
  },
  wordItem: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  }
});

export default VocabularyItem;
