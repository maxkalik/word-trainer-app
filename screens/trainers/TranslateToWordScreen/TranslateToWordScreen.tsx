import React from 'react';
import Trainer from '../../../components/Trainer/Trainer';
import TrainerDesk from '../../../components/TrainerDesk/TrainerDesk';

const TranslateToWordScreen: React.FC<{ navigation: any }> = ({ navigation }): JSX.Element => (
  <Trainer onPressBackButton={(): void => navigation.goBack()}>
    <TrainerDesk words={navigation.state.params} translateToWord />
  </Trainer>
);

export default TranslateToWordScreen;
