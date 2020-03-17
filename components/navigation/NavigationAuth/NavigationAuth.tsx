import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { screens } from './screens';
import { styles } from './styles';
import { colors, fontSizes, sizes } from '../../../util/constants';

const TabBarComponent: React.FC = (props: any) => <BottomTabBar {...props} style={styles.container} />;

const TabNavigator = createBottomTabNavigator(screens, {
  tabBarComponent: props => <TabBarComponent {...props} />,
  resetOnBlur: true,
  tabBarOptions: {
    showIcon: false,
    keyboardHidesTabBar: false,
    inactiveBackgroundColor: 'transparent',
    activeBackgroundColor: 'transparent',
    activeTintColor: colors.COLOR_ACTIVE,
    inactiveTintColor: colors.COLOR_PRIMARY,
    adaptive: false,
    labelStyle: {
      fontSize: fontSizes.H3
    },
    tabStyle: {
      justifyContent: 'center'
      // borderBottomWidth: 2
    }
  },
  defaultNavigationOptions: ({ navigation }) => {
    const { isFocused } = navigation;
    console.log(isFocused());
    return {
      tabStyle: {
        borderBottomWidth: 2
      }
    };
  }
});

const NavigationAuth = createAppContainer(TabNavigator);

export default NavigationAuth;
