import React from 'react';
import { SafeAreaView } from 'react-native';
import { useStateValue } from '../../state';
import { Header } from '../../components/common';
import TrainerDesk from '../../components/TrainerDesk/TrainerDesk';
import { styles } from './styles';

const TrainerScreen: React.FC = ({ navigation }): JSX.Element => {
  const [{ words }] = useStateValue();
  navigation.setOptions({tabBarVisible: false})
  return (
    <SafeAreaView style={styles.container}>
      <Header backButton onPressBackButton={(): void => navigation.goBack()} />
      <TrainerDesk words={words} />
    </SafeAreaView>
  );
};

export default TrainerScreen;
