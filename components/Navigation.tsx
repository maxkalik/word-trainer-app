import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import TrainerScreen from '../screens/TrainerScreen/TrainerScreen';
import AddWordScreen from '../screens/AddWordScreen/AddWordScreen';
import VocabularyScreen from '../screens/VocabularyScreen/VocabularyScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const TabBarComponent: React.FC = (props: any) => <BottomTabBar {...props} />;

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Trainer: TrainerScreen,
    ['Add Word']: AddWordScreen,
    Vocabulary: VocabularyScreen,
    Profile: ProfileScreen
  },
  {
    tabBarComponent: props => (
      <TabBarComponent {...props} style={styles.container} />
    ),
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      return {
        tabBarIcon: ({ tintColor }) => (
          <View style={{ ...styles.icon, backgroundColor: tintColor }} />
        )
      };
    },
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      style: { height: 70 },
      activeBackgroundColor: '#F5F5F5',
      labelStyle: {
        fontSize: 12,
        paddingBottom: 10
      }
    }
  }
);

const styles = StyleSheet.create({
  container: { height: 70 },
  icon: { width: 18, height: 18, marginTop: 5 }
});

const Navigation = createAppContainer(TabNavigator);

export default Navigation;
