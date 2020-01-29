import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const BottomBarSection: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }): JSX.Element => (
  <View style={styles.container}>{children}</View>
);

export default BottomBarSection;
