import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useStateValue } from '../../state';
import { randomItem, makeWordsDesk } from './helpers';
import TrainerDeskItems from '../../components/TrainerDeskItems';

const TrainerScreen: React.FC = (): JSX.Element => {
  const [{ words }] = useStateValue();
  const wordsLength: boolean = words.length >= 10;
  const getWordsDesk = (): [] => (wordsLength ? makeWordsDesk(4, words) : []);
  const [wordsDesk, setWordsDesk] = useState(getWordsDesk);

  const renderDesk = () => {
    const showedWord = randomItem(wordsDesk);
    return (
      <>
        <Text>{showedWord.word}</Text>
        <View>
          <TrainerDeskItems
            wordsArr={wordsDesk}
            updateWordsState={() => setWordsDesk(getWordsDesk)}
            headerWord={showedWord.word}
          />
        </View>
      </>
    );
  };

  return <View style={styles.root}>{renderDesk()}</View>;
};

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default TrainerScreen;
