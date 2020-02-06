import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Header } from '../../components/common';
import { styles } from './styles';

const VocabularyItemScreen: React.FC<{ navigation: any }> = ({
  navigation
}): JSX.Element => {
  const { word, translation } = navigation.state.params;
  return (
    <SafeAreaView style={styles.container}>
      <Header backButton onPressBackButton={(): void => navigation.goBack()} />
      <View>
        <Text>{word}</Text>
        <Text>{translation}</Text>
      </View>
    </SafeAreaView>
  );
};

export default VocabularyItemScreen;
