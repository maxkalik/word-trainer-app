import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useStateValue } from '../../state';
import { randomItem, makeWordsDesk } from './helpers';
import TrainerDeskItems from '../../components/TrainerDeskItems';
import TrainerWord from '../../components/TrainerWord';
import Message from '../../components/Message';

const TrainerScreen: React.FC = (props: any): JSX.Element => {
  const [{ words }] = useStateValue();
  const wordsLength: boolean = words.length >= 10;
  const getWordsDesk = (): any => (wordsLength ? makeWordsDesk(5, words) : []);
  const [wordsDesk, setWordsDesk] = useState(getWordsDesk);

  const renderMessage = () => (
    <Message
      title={`${words.length}/10 words`}
      description="You have insufficient words amount"
      btnTitle="Add More Words"
      btnOnPress={(): void => props.navigation.navigate('Add Word')}
    />
  );

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
