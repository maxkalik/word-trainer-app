import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './screens/HomeScreen';
import TrainerScreen from './screens/TrainerScreen';
import AddWordScreen from './screens/AddWordScreen';
import VocabularyScreen from './screens/VocabularyScreen';
import ProfileScreen from './screens/ProfileScreen';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Trainer: TrainerScreen,
  ['Add Word']: AddWordScreen,
  Vocabulary: VocabularyScreen,
  Profile: ProfileScreen
});

const App = createAppContainer(TabNavigator);

export default App;
