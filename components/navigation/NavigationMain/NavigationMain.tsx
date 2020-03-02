import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { screens } from './screens';
import { Icon24px } from '../../icons';
import { tabIcons } from './helpers';
import { styles } from './styles';

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
    activeTintColor: 'royalblue',
    inactiveTintColor: 'black',
    style: { height: 70 },
    activeBackgroundColor: 'none',
    labelStyle: {
      fontSize: 12,
      paddingBottom: 10
    }
  }
});

const Navigation = createAppContainer(TabNavigator);

export default Navigation;
