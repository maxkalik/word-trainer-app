import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import TrainerScreen from '../screens/TrainerScreen/TrainerScreen';
import AddWordScreen from '../screens/AddWordScreen/AddWordScreen';
import VocabularyScreen from '../screens/VocabularyScreen/VocabularyScreen';

const TabBarComponent: React.FC = (props: any) => <BottomTabBar {...props} />;

const TabNavigator = createBottomTabNavigator(
  {
    Trainer: TrainerScreen,
    ['Add Word']: AddWordScreen,
    Vocabulary: VocabularyScreen
  },
  {
    tabBarComponent: props => (
      <TabBarComponent {...props} style={styles.container} />
    ),
    defaultNavigationOptions: () => {
      return {
        tabBarIcon: ({ tintColor }): JSX.Element => (
          <View style={{ ...styles.icon, backgroundColor: tintColor }} />
        )
      };
    },
    tabBarOptions: {
      keyboardHidesTabBar: false,
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
