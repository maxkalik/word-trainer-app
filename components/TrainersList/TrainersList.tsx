import React, { useState } from 'react';
import { Animated } from 'react-native';
import TrainersListHeader from '../TrainersListHeader/TrainersListHeader';
import TrainerItem from '../TrainerItem/TrainerItem';
import { WordTypes } from '../../types';
import { sizes, trainerColors } from '../../util/constants';
import { styles } from './styles';

const TrainersList: React.FC<{ words: WordTypes[]; navigation: any; mode: 'light' | 'dark' }> = ({
  words,
  navigation,
  mode
}): JSX.Element => {
  const [offset] = useState(new Animated.Value(1));

  const trainers = [
    {
      screenName: 'Word to Translate',
      imgSource: require('../../assets/images/png/trainer-word-to-translate.png'),
      backgroundColor: trainerColors.COLOR_WORD_TO_TRANSLATE,
      title: 'Find correct translation'
    },
    {
      screenName: 'Translate to Word',
      title: 'Translate from your language',
      backgroundColor: trainerColors.COLOR_TRANSLATE_TO_WORD,
      imgSource: require('../../assets/images/png/trainer-translate-to-word.png')
    }
  ];

  return (
    <Animated.FlatList
      contentContainerStyle={{ paddingBottom: sizes.HEIGHT_GENERAL }}
      numColumns={trainers.length > 2 ? 2 : 1}
      style={styles.container}
      data={trainers}
      ListHeaderComponent={() => <TrainersListHeader mode={mode} offset={offset} />}
      renderItem={({ item }: any) => (
        <TrainerItem
          title={item.title}
          onPress={() => navigation.navigate(item.screenName, words)}
          imgSource={item.imgSource}
          backgroundColor={item.backgroundColor}
        />
      )}
      keyExtractor={({ screenName }: { screenName: string }) => screenName}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: offset } } }], {
        useNativeDriver: true
      })}
    />
  );
};

export default TrainersList;
