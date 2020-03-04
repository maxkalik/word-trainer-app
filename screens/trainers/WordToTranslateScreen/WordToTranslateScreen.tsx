import React from 'react';
import Trainer from '../../../components/Trainer/Trainer';
import TrainerDesk from '../../../components/TrainerDesk/TrainerDesk';
import { trainerColors, colors } from '../../../util/constants';

const WordToTranslateScreen: React.FC<{ navigation: any }> = ({ navigation }): JSX.Element => (
  <Trainer
    onPressBackButton={(): void => navigation.goBack()}
    backButtonColor={colors.COLOR_PRIMARY_ON_BG}
    bgColor={trainerColors.COLOR_WORD_TO_TRANSLATE}
    backGradientOpacity={0.3}
  >
    <TrainerDesk words={navigation.state.params} />
  </Trainer>
);

export default WordToTranslateScreen;
