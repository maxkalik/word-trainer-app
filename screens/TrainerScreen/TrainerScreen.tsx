import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from '../../state';
import { Header } from '../../components/common';
import TrainerDesk from '../../components/TrainerDesk/TrainerDesk';
import { styles } from './styles';

const TrainerScreen: React.FC = (): JSX.Element => {
  const [{ words }] = useStateValue();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header backButton onPressBackButton={(): void => navigation.goBack()} />
      <TrainerDesk words={words} />
    </SafeAreaView>
  );
};

export default TrainerScreen;
