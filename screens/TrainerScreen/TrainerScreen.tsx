import React from 'react';
import { SafeAreaView } from 'react-native';
import { useStateValue } from '../../state';
import TrainerHeader from '../../components/TrainerHeader/TrainerHeader';
import TrainerDesk from '../../components/TrainerDesk/TrainerDesk';
import { styles } from './styles';

const TrainerScreen: React.FC = (props: any): JSX.Element => {
  const [{ words }] = useStateValue();

  return (
    <SafeAreaView style={styles.container}>
      <TrainerHeader onPress={(): void => props.navigation.goBack()} />
      <TrainerDesk words={words} />
    </SafeAreaView>
  );
};

export default TrainerScreen;
