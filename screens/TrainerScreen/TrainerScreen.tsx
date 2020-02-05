import React from 'react';
import { View, Button } from 'react-native';
import { useStateValue } from '../../state';
import { Message, Header } from '../../components/common';
import TrainerDesk from '../../components/TrainerDesk/TrainerDesk';
import { styles } from './styles';

const TrainerScreen: React.FC = (props: any): JSX.Element => {
  const [{ words }] = useStateValue();
  const wordsLength = words.length >= 10;

  const renderMessage = () => (
    <Message
      title={`${words.length}/10 words`}
      description="You have insufficient words amount"
      btnTitle="Add More Words"
      btnOnPress={(): void => props.navigation.navigate('Add Word')}
    />
  );

  return (
    <View style={styles.container}>
      <Header>
        <Button title="<" onPress={(): void => props.navigation.goBack()} />
      </Header>
      {wordsLength ? <TrainerDesk words={words} /> : renderMessage()}
    </View>
  );
};

export default TrainerScreen;
