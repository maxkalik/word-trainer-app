import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useStateValue } from '../../state';
import { randomItem, makeWordsDesk } from './helpers';
import TrainerDeskItems from '../../components/TrainerDeskItems';
import TrainerWord from '../../components/TrainerWord';
// import { WordTypes } from '../../types';

const TrainerScreen: React.FC = (): JSX.Element => {
  const [{ words }] = useStateValue();
  const wordsLength: boolean = words.length >= 10;
  const getWordsDesk = (): any => (wordsLength ? makeWordsDesk(5, words) : []);
  const [wordsDesk, setWordsDesk] = useState(getWordsDesk);

  const renderMessage = () => <Text>Add more words</Text>;

  const renderDesk = () => {
    const showedWord = randomItem(wordsDesk);

    return (
      <>
        <TrainerWord word={showedWord.word} />
        <TrainerDeskItems
          wordsArr={wordsDesk}
          updateWordsState={() => setWordsDesk(getWordsDesk)}
          headerWord={showedWord.word}
        />
      </>
    );
  };

  return (
    <View style={styles.root}>
      {wordsLength ? renderDesk() : renderMessage()}
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default TrainerScreen;
