import React from 'react';
import { StyleSheet, View } from 'react-native';

const Header: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }): JSX.Element => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 10,
    borderBottomColor: 'silver',
    borderBottomWidth: 0.5
  }
});

export default Header;
