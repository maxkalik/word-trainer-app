import React from 'react';
import { View, Button } from 'react-native';
import { useStateValue } from '../../state';
import { Message } from '../../components/common';
import { WordTypes } from '../../types';
import { styles } from './styles';

const TrainersScreen: React.FC = (props: any): JSX.Element => {
  const [{ words }] = useStateValue();
  const wordsLength = words.length >= 10;

  const renderMessage = () => (
    <Message
      title={`${words.length}/10 words`}
      description="You have insufficient words amount to train"
      btnTitle="Add More Words"
      btnOnPress={(): void => props.navigation.navigate('Add Word')}
    />
  );

  const renderTrainers = (wordItmes: WordTypes[]) => (
    <Button
      title="Go to Details"
      onPress={() => props.navigation.navigate('Trainer', wordItmes)}
    />
  );

  return (
    <View style={styles.container}>
      {wordsLength ? renderTrainers(words) : renderMessage()}
    </View>
  );
};

export default TrainersScreen;
