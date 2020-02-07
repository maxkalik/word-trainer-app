import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TrainersScreen from '../../screens/TrainersScreen/TrainersScreen';
import TrainerScreen from '../../screens/TrainerScreen/TrainerScreen';
import AddWordScreen from '../../screens/AddWordScreen/AddWordScreen';
import VocabularyScreen from '../../screens/VocabularyScreen/VocabularyScreen';
import VocabularyItemScreen from '../../screens/VocabularyItemScreen/VocabularyItemScreen';

const TrainerStack = createStackNavigator();
const TrainerStackScreen: React.FC = (): JSX.Element => (
  <TrainerStack.Navigator
    mode="card"
    headerMode="none"
    initialRouteName="Trainers">
    <TrainerStack.Screen name="Trainers" component={TrainersScreen} />
    <TrainerStack.Screen
      name="Trainer"
      component={TrainerScreen}
      options={{ headerShown: false }}
    />
  </TrainerStack.Navigator>
);

const VocabularyStack = createStackNavigator();
const VocabularyStackScreen: React.FC = (): JSX.Element => (
  <VocabularyStack.Navigator
    mode="card"
    headerMode="none"
    initialRouteName="Vocabulary">
    <VocabularyStack.Screen name="Vocabulary" component={VocabularyScreen} />
    <VocabularyStack.Screen
      name="Vocabulary Item"
      component={VocabularyItemScreen}
      options={{ headerShown: false }}
    />
  </VocabularyStack.Navigator>
);

export const screens = [
  { name: 'Trainers', component: TrainerStackScreen },
  { name: 'Add Word', component: AddWordScreen },
  {
    name: 'Vocabulary',
    component: VocabularyStackScreen,
    options: { tabBarVisible: false }
  }
];
