import { StyleSheet } from 'react-native';
// import { height } from './Notification';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    zIndex: 9999,
    left: 0,
    top: 0,
    // height: height,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingVertical: 20
    // margin: 10
  },
  title: {
    fontSize: 18,
    textAlign: 'center'
  }
});
