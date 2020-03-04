import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { screens } from './screens';
import { Icon24px } from '../../icons';
import { tabIcons } from './helpers';
import { styles } from './styles';
import { colors, sizes, textSizes } from '../../../util/constants';

const TabBarComponent: React.FC = (props: any) => <BottomTabBar {...props} />;

const TabNavigator = createBottomTabNavigator(screens, {
  tabBarComponent: props => <TabBarComponent {...props} style={styles.container} />,
  resetOnBlur: true,
  defaultNavigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state;
    return {
      tabBarIcon: ({ tintColor, focused }): JSX.Element => (
        <Icon24px name={tabIcons(routeName, focused)} color={tintColor} />
      )
    };
  },
  tabBarOptions: {
    keyboardHidesTabBar: false,
    activeTintColor: colors.COLOR_ACTIVE,
    inactiveTintColor: colors.COLOR_PRIMARY,
    style: { height: sizes.HEIGHT_GENERAL },
    activeBackgroundColor: 'none',
    labelStyle: {
      fontSize: textSizes.SMALL,
      paddingBottom: sizes.PADDING_SMALL
    }
  }
});

const Navigation = createAppContainer(TabNavigator);

export default Navigation;
