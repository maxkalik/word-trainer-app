import { createStackNavigator } from 'react-navigation-stack';
import TrainersScreen from '../../screens/TrainersScreen/TrainersScreen';
import { WordToTranslateScreen } from '../../screens/trainers';
import AddWordScreen from '../../screens/AddWordScreen/AddWordScreen';
import VocabularyScreen from '../../screens/VocabularyScreen/VocabularyScreen';
import VocabularyItemScreen from '../../screens/VocabularyItemScreen/VocabularyItemScreen';

const stackOptions = {
  mode: 'card',
  headerMode: 'none'
};

const TrainersStack = createStackNavigator(
  {
    ['Trainers']: TrainersScreen,
    ['Word to Translate']: WordToTranslateScreen
  },
  {
    initialRouteName: 'Trainers',
    ...stackOptions
  }
);

const VocabularyStack = createStackNavigator(
  {
    ['Vocabulary']: VocabularyScreen,
    ['Vocabulary Item']: VocabularyItemScreen
  },
  {
    initialRouteName: 'Vocabulary',
    ...stackOptions
  }
);

export const screens = {
  ['Trainers']: TrainersStack,
  ['Add Word']: AddWordScreen,
  ['Vocabulary']: VocabularyStack
};

TrainersStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};