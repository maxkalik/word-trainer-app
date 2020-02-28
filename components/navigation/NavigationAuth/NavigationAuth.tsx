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
  tabBarOptions: {
    showIcon: false,
    keyboardHidesTabBar: false,
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
    activeBackgroundColor: '#F5F5F5',
    adaptive: false,
    labelStyle: {
      paddingTop: 22,
      fontSize: 16,
      // borderWidth: 2,
      flex: 1
    },
    tabStyle: {
      justifyContent: 'center',
      // borderWidth: 2,
      borderRadius: 10
    }
  }
});

const NavigationAuth = createAppContainer(TabNavigator);

export default NavigationAuth;
