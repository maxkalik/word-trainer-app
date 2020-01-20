import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export interface PopUpProps {
  visible: boolean;
  title: string;
}

const PopUp: React.FC<PopUpProps> = ({ visible, title }): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    zIndex: 99,
    height: 120,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingBottom: 20
  },
  title: {
    fontSize: 18,
    textAlign: 'center'
  }
});

export default PopUp;
