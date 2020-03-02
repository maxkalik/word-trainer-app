import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { screens } from './screens';
import { styles } from './styles';

const TabBarComponent: React.FC = (props: any) => <BottomTabBar {...props} style={styles.container} />;

const TabNavigator = createBottomTabNavigator(screens, {
  tabBarComponent: props => <TabBarComponent {...props} />,
  resetOnBlur: true,
  tabBarOptions: {
    showIcon: false,
    keyboardHidesTabBar: false,
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
    activeBackgroundColor: '#F5F5F5',
    adaptive: false,
    labelStyle: {
      fontSize: 16
    },
    tabStyle: {
      justifyContent: 'center',
      borderRadius: 10
    }
  }
});

const NavigationAuth = createAppContainer(TabNavigator);

export default NavigationAuth;
