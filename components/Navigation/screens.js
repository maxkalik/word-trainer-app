import { createStackNavigator } from 'react-navigation-stack';
import TrainersScreen from '../../screens/TrainersScreen/TrainersScreen';
import TrainerScreen from '../../screens/TrainerScreen/TrainerScreen';
import AddWordScreen from '../../screens/AddWordScreen/AddWordScreen';
import VocabularyScreen from '../../screens/VocabularyScreen/VocabularyScreen';

const TrainersStack = createStackNavigator(
  {
    Trainers: TrainersScreen,
    Trainer: TrainerScreen
  },
  {
    initialRouteName: 'Trainers',
    mode: 'card',
    headerMode: 'none'
  }
);

TrainersStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

export const screens = {
  Trainers: TrainersStack,
  ['Add Word']: AddWordScreen,
  Vocabulary: VocabularyScreen
};
