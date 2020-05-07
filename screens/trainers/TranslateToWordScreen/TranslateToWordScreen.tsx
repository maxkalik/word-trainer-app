import React from 'react';
import Trainer from '../../../components/Trainer/Trainer';
import TrainerDesk from '../../../components/TrainerDesk/TrainerDesk';
import { trainerColors, colors } from '../../../util/constants';

const TranslateToWordScreen: React.FC<{ navigation: any }> = ({ navigation }): JSX.Element => (
  <Trainer
    onPressBackButton={(): void => navigation.goBack()}
    backButtonColor={colors.COLOR_PRIMARY_ON_BG}
    bgColor={trainerColors.COLOR_TRANSLATE_TO_WORD}
    backGradientOpacity={0.8}
  >
    <TrainerDesk words={navigation.state.params} translateToWord />
  </Trainer>
);

export default TranslateToWordScreen;
