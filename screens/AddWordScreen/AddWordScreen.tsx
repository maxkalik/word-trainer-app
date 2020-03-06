import React from 'react';
import { SafeAreaView } from 'react-native';
import WordItem from '../../components/WordItem/WordItem';
import { colors } from '../../util/constants';
import { useModeValue } from '../../state';
import { styles } from './styles';

const AddWordScreen: React.FC = (): JSX.Element => {
  const [mode] = useModeValue();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors[mode].COLOR_BACKGROUND }]}>
      <WordItem mainBtnTitle="Add Word" actionName="push" mode={mode} />
    </SafeAreaView>
  );
};

export default AddWordScreen;
