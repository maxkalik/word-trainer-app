import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { screens } from './screens';
import { tabBarOptions } from './tabBarOptions';
import { styles } from './styles';

const TabBarComponent: React.FC = (props: any) => <BottomTabBar {...props} />;

const TabNavigator = createBottomTabNavigator(screens, {
  tabBarComponent: props => <TabBarComponent {...props} style={styles.container} />,
  resetOnBlur: true,
  tabBarOptions: tabBarOptions
});

const NavigationAuth = createAppContainer(TabNavigator);

export default NavigationAuth;
