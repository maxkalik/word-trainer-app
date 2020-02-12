import React from 'react';
import { SafeAreaView } from 'react-native';
import WordItem from '../../components/WordItem/WordItem';
import { styles } from './styles';

const AddWordScreen: React.FC = (): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <WordItem mainBtnTitle="Add Word" actionName="push" />
  </SafeAreaView>
);

export default AddWordScreen;
