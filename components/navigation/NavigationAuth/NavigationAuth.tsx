import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { screens } from './screens';
import { tabBarOptions } from './tabBarOptions';
import { styles } from './styles';

const TabBarComponent: React.FC = (props: any) => <BottomTabBar {...props} style={styles.container} />;

const TabNavigator = createBottomTabNavigator(screens, {
  tabBarComponent: props => <TabBarComponent {...props} />,
  resetOnBlur: true,
  tabBarOptions: tabBarOptions
});

const NavigationAuth = createAppContainer(TabNavigator);

export default NavigationAuth;
