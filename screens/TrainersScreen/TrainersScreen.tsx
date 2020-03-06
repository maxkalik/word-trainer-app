import React from 'react';
import { SafeAreaView } from 'react-native';
import TrainersList from '../../components/TrainersList/TrainersList';
import { useModeValue, useWordsValue } from '../../state';
import { Message } from '../../components/common';
import { styles } from './styles';
import { colors } from '../../util/constants';

import { useTestValue } from '../../state/Test';

const TrainersScreen: React.FC<{ navigation: any }> = ({ navigation }): JSX.Element => {
  const [test, setTest] = useTestValue();
  setTest('test value');
  console.log(test);

  const [mode] = useModeValue();
  const [{ words }] = useWordsValue();
  const wordsLength = words.length >= 10;

  const renderMessage = () => (
    <Message
      title={`${words.length}/10 words`}
      description="You have insufficient words amount to train"
      btnTitle="Add More Words"
      btnOnPress={(): void => navigation.navigate('Add Word')}
    />
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors[mode].COLOR_BACKGROUND }]}>
      {wordsLength ? <TrainersList words={words} navigation={navigation} mode={mode} /> : renderMessage()}
    </SafeAreaView>
  );
};

export default TrainersScreen;
