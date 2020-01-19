import React from 'react';
import { StyleSheet, View } from 'react-native';

const BottomBarSection: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }): JSX.Element => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 14,
    height: 160,
    paddingVertical: 20,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'silver'
  }
});

export default BottomBarSection;
