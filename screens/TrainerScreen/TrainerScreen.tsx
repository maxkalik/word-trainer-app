import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { useStateValue } from '../../state';
import { Message, Header } from '../../components/common';
import { Icon24px } from '../../components/icons';
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
    <SafeAreaView style={styles.container}>
      <Header>
        <TouchableOpacity onPress={(): void => props.navigation.goBack()} style={styles.backBtn}>
          <Icon24px name="arrow left line" />
        </TouchableOpacity>
      </Header>
      {wordsLength ? <TrainerDesk words={words} /> : renderMessage()}
    </SafeAreaView>
  );
};

export default TrainerScreen;
