import { StyleSheet } from 'react-native';
import { height } from './Notification';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    zIndex: 99,
    height: height,
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
