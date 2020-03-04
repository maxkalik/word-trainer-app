import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { screens } from './screens';
import { styles } from './styles';
import { colors, textSizes, sizes } from '../../../util/constants';

const TabBarComponent: React.FC = (props: any) => <BottomTabBar {...props} style={styles.container} />;

const TabNavigator = createBottomTabNavigator(screens, {
  tabBarComponent: props => <TabBarComponent {...props} />,
  resetOnBlur: true,
  tabBarOptions: {
    showIcon: false,
    keyboardHidesTabBar: false,
    activeTintColor: colors.COLOR_ACTIVE,
    inactiveTintColor: colors.COLOR_PRIMARY,
    activeBackgroundColor: colors.COLOR_BACK_ACTIVE,
    adaptive: false,
    labelStyle: {
      fontSize: textSizes.PARAGRAPH
    },
    tabStyle: {
      justifyContent: 'center',
      borderRadius: sizes.RADIUS_SMALL_ELEMENTS
    }
  }
});

const NavigationAuth = createAppContainer(TabNavigator);

export default NavigationAuth;
