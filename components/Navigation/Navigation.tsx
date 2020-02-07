import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { screens } from './Screens';
import { tabBarOptions } from './tabBarOptions';
import { Icon24px } from '../icons';
import { tabIcons } from './helpers';

const Tab = createBottomTabNavigator();

const Navigation: React.FC = (): JSX.Element => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ color, focused }): JSX.Element => (
            <Icon24px name={tabIcons(route.name, focused)} color={color} />
          )
        };
      }}
      tabBarOptions={tabBarOptions}>
      {screens.map(item => (
        <Tab.Screen {...item} key={item.name} />
      ))}
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navigation;
