import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { screens } from './screens';
import { tabBarOptions } from './tabBarOptions';
import { styles } from './styles';

const TabBarComponent: React.FC = (props: any) => <BottomTabBar {...props} />;

const TabNavigator = createBottomTabNavigator(screens, {
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
  tabBarOptions: tabBarOptions
});

const Navigation = createAppContainer(TabNavigator);

export default Navigation;
