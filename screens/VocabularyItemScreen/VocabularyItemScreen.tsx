import React from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from '../../components/common';
import WordItem from '../../components/WordItem/WordItem';
import { styles } from './styles';

const VocabularyItemScreen: React.FC<{ navigation: any }> = ({
  navigation
}): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <Header backButton onPressBackButton={(): void => navigation.goBack()} />
    <WordItem
      mainBtnTitle="Save"
      actionName="set"
      item={navigation.state.params}
    />
  </SafeAreaView>
);

export default VocabularyItemScreen;
