import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import initFirebase from './initFirebase';
import { objectToArray } from './helpers';
import HomeScreen from './screens/HomeScreen';
import TrainerScreen from './screens/TrainerScreen';
import AddWordScreen from './screens/AddWordScreen';
import VocabularyScreen from './screens/VocabularyScreen';
import ProfileScreen from './screens/ProfileScreen';

const TabBarComponent: React.FC = (props: any) => {
  const [spinner, setSpinner] = useState(true);
  const [words, setWords] = useState<null | object>(null);
  // console.log(words);
  useEffect(() => {
    initFirebase();
    const database = firebase.database().ref('words');
    database.on('value', snapshot => {
      const data = snapshot.val();
      if (data !== null) {
        console.log(data);
        // setWords(objectToArray(data).reverse());
        // setSpinner(false);
      } else {
        console.log('Error while fetching data');
      }
    });
  }, []);
  return <BottomTabBar {...props} />;
};

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
      <TabBarComponent {...props} style={{ height: 70 }} />
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
  icon: { width: 18, height: 18, marginTop: 5 }
});

const App = createAppContainer(TabNavigator);

export default App;
