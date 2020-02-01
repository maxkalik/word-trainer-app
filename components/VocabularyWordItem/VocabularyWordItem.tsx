import React, { useState, useEffect } from 'react';
import { Text, Animated } from 'react-native';
import { WordTypes } from '../../types';
import { styles } from './styles';

const VocabularyWordItem: React.FC<{
  item: WordTypes;
  isCheckMode?: boolean;
}> = ({ item: { word, translation }, isCheckMode }): JSX.Element => {
  const [leftPadValue] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isCheckMode) {
      Animated.spring(leftPadValue, {
        toValue: 15
      }).start();
    } else {
      Animated.spring(leftPadValue, {
        toValue: 0
      }).start();
    }
  });

  return (
    <Animated.View style={[styles.container, { paddingLeft: leftPadValue }]}>
      <Text style={styles.word}>{word}</Text>
      <Text style={styles.translation}>{translation}</Text>
    </Animated.View>
  );
};

export default VocabularyWordItem;
