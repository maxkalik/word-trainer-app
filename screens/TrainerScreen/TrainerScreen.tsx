import React from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from '../../components/common';
import TrainerDesk from '../../components/TrainerDesk/TrainerDesk';
import { styles } from './styles';

const TrainerScreen: React.FC = (props: any): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <Header backButton onPressBackButton={(): void => props.navigation.goBack()} />
    <TrainerDesk words={props.navigation.state.params} />
  </SafeAreaView>
);

export default TrainerScreen;
