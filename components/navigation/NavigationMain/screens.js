import { createStackNavigator } from 'react-navigation-stack';
import { tabBarOnlyFirstInStack, stackOptions } from '../navOptions';
import TrainersScreen from '../../../screens/TrainersScreen/TrainersScreen';
import { WordToTranslateScreen, TranslateToWordScreen } from '../../../screens/trainers';
import AddWordScreen from '../../../screens/AddWordScreen/AddWordScreen';
import VocabularyScreen from '../../../screens/VocabularyScreen/VocabularyScreen';
import VocabularyItemScreen from '../../../screens/VocabularyItemScreen/VocabularyItemScreen';
import ProfileScreen from '../../../screens/ProfileScreen/ProfileScreen';

const TrainersStack = createStackNavigator(
  {
    ['Trainers']: TrainersScreen,
    ['Word to Translate']: WordToTranslateScreen,
    ['Translate to Word']: TranslateToWordScreen
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
  ['Vocabulary']: VocabularyStack,
  ['Profile']: ProfileScreen
};

TrainersStack.navigationOptions = ({ navigation }) => tabBarOnlyFirstInStack(navigation);
