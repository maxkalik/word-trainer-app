import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { screens } from './screens';
import { tabBarOptions } from './tabBarOptions';
import { Icon24px } from '../../icons';
import { tabIcons } from './helpers';
import { styles } from './styles';

const TabBarComponent: React.FC = (props: any) => <BottomTabBar {...props} user={props.user} />;

const TabNavigator = createBottomTabNavigator(screens, {
  tabBarComponent: props => <TabBarComponent {...props} style={styles.container} user={props.user} />,
  resetOnBlur: true,
  defaultNavigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state;
    return {
      tabBarIcon: ({ tintColor, focused }): JSX.Element => (
        <Icon24px name={tabIcons(routeName, focused)} color={tintColor} />
      )
    };
  },
  tabBarOptions: tabBarOptions
});

const Navigation = createAppContainer(TabNavigator);

export default Navigation;
