import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const Header: React.FC<{
  children: JSX.Element | JSX.Element[];
  withBottomLine?: boolean;
}> = ({ children, withBottomLine }): JSX.Element => (
  <View style={[styles.container, withBottomLine && styles.withBottomLine]}>
    {children}
  </View>
);

export default Header;
