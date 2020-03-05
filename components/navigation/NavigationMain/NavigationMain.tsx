import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { screens } from './screens';
import { Icon24px } from '../../icons';
import { tabIcons } from './helpers';
import { styles } from './styles';
import { useModeValue } from '../../../state';
import { colors, sizes, fontSizes } from '../../../util/constants';

const TabBarComponent: React.FC = (props: any): JSX.Element => {
  const [mode] = useModeValue();
  const { COLOR_ACTIVE, COLOR_INACTIVE, COLOR_BACKGROUND } = colors[mode];
  return (
    <BottomTabBar
      {...props}
      activeTintColor={COLOR_ACTIVE}
      inactiveTintColor={COLOR_INACTIVE}
      style={[styles.container, { backgroundColor: COLOR_BACKGROUND }]}
    />
  );
};

const TabNavigator = createBottomTabNavigator(screens, {
  tabBarComponent: props => <TabBarComponent {...props} />,
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
    style: { height: sizes.HEIGHT_GENERAL },
    activeBackgroundColor: 'none',
    labelStyle: {
      fontSize: fontSizes.SMALL,
      paddingBottom: sizes.PADDING_SMALL
    }
  }
});

const Navigation = createAppContainer(TabNavigator);

export default Navigation;
