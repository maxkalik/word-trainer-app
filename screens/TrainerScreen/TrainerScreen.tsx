import React from 'react';
import { SafeAreaView } from 'react-native';
import { useStateValue } from '../../state';
import { Header } from '../../components/common';
import TrainerDesk from '../../components/TrainerDesk/TrainerDesk';
import { styles } from './styles';

const TrainerScreen: React.FC = (props: any): JSX.Element => {
  const [{ words }] = useStateValue();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        backButton
        onPressBackButton={(): void => props.navigation.goBack()}
      />
      <TrainerDesk words={words} />
    </SafeAreaView>
  );
};

export default TrainerScreen;
