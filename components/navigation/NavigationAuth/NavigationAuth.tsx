import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { screens } from './screens';
import { styles } from './styles';
import { colors, fontSizes } from '../../../util/constants';

const TabBarComponent: React.FC = (props: any) => (
  <BottomTabBar
    {...props}
    style={styles.container}
    activeTintColor={colors.default.COLOR_ACTIVE}
    inactiveTintColor={colors.default.COLOR_PRIMARY}
  />
);

const TabNavigator = createBottomTabNavigator(screens, {
  tabBarComponent: props => <TabBarComponent {...props} />,
  tabBarOptions: {
    showIcon: true,
    keyboardHidesTabBar: false,
    activeBackgroundColor: 'transparent',
    adaptive: false,
    labelStyle: {
      fontSize: fontSizes.H3
    }
  },
  defaultNavigationOptions: () => {
    return {
      tabBarIcon: ({ tintColor, focused }): JSX.Element => (
        <View style={[styles.icon, { backgroundColor: focused ? tintColor : 'transparent' }]} />
      )
    };
  }
});

const NavigationAuth = createAppContainer(TabNavigator);

export default NavigationAuth;
