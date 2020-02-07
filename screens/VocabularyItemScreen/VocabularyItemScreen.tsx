import React from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { SafeAreaView, View, Text } from 'react-native';
import { Header } from '../../components/common';
import { WordTypes } from '../../types';
import { styles } from './styles';

const VocabularyItemScreen: React.FC = (): JSX.Element => {
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<Record<string, WordTypes>, string>>();
  const { word, translation } = params;
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
