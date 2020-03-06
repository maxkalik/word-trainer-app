import React from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from '../../components/common';
import WordItem from '../../components/WordItem/WordItem';
import { colors } from '../../util/constants';
import { useModeValue } from '../../state';
import { styles } from './styles';

const VocabularyItemScreen: React.FC<{ navigation: any }> = ({ navigation }): JSX.Element => {
  const [mode] = useModeValue();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors[mode].COLOR_BACKGROUND }]}>
      <Header backButton onPressBackButton={(): void => navigation.goBack()} />
      <WordItem mainBtnTitle="Save" actionName="set" item={navigation.state.params} mode={mode} />
    </SafeAreaView>
  );
};

export default VocabularyItemScreen;
