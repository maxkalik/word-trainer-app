import React from 'react';
import { View, Button } from 'react-native';
import { useStateValue } from '../../state';
import { Message } from '../../components/common';
import { styles } from './styles';

const TrainersScreen: React.FC = ({ navigation }): JSX.Element => {
  const [{ words }] = useStateValue();
  const wordsLength = words.length >= 10;

  const renderMessage = () => (
    <Message
      title={`${words.length}/10 words`}
      description="You have insufficient words amount"
      btnTitle="Add More Words"
      btnOnPress={(): void => navigation.navigate('Add Word')}
    />
  );

  const renderTrainers = () => (
    <Button
      title="Go to Details"
      onPress={() => {navigation.navigate('Trainer');
      console.log("Here")
      navigation.setOptions({tabBarVisible: false})
    }}
    />
  );

  navigation.setOptions({tabBarVisible: false})
  return (
    <View style={styles.container}>
      {wordsLength ? renderTrainers() : renderMessage()}
    </View>
  );
};

export default TrainersScreen;
