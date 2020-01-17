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
    paddingBottom: 24,
    alignItems: 'center',
    flexDirection: 'column',
    borderTopWidth: 1,
    borderTopColor: 'silver'
  }
});

export default BottomBarSection;
