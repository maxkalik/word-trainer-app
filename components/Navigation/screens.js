import { createStackNavigator } from 'react-navigation-stack';
import TrainersScreen from '../../screens/TrainersScreen/TrainersScreen';
import TrainerScreen from '../../screens/TrainerScreen/TrainerScreen';
import AddWordScreen from '../../screens/AddWordScreen/AddWordScreen';
import VocabularyScreen from '../../screens/VocabularyScreen/VocabularyScreen';

const TrainersStack = createStackNavigator({
  Trainers: TrainersScreen,
  Trainer: TrainerScreen
});

export const screens = {
  Trainers: TrainersStack,
  ['Add Word']: AddWordScreen,
  Vocabulary: VocabularyScreen
};
