import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import TrainerScreen from '../screens/TrainerScreen';
import AddWordScreen from '../screens/AddWordScreen';
import VocabularyScreen from '../screens/VocabularyScreen';
import ProfileScreen from '../screens/ProfileScreen';

const TabBarComponent: React.FC = (props): any => <BottomTabBar {...props} />;

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
      <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} />
    ),
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      console.log(routeName);
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
  icon: { width: 18, height: 18, marginTop: 5 }
});

const Navigator = (): any => createAppContainer(TabNavigator);

export default Navigator;
