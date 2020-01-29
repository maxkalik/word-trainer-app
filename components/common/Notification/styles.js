import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    zIndex: 9999,
    elevation: 3,
    left: 0,
    top: 0
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    margin: 10
  },
  title: {
    fontSize: 16,
    textAlign: 'center'
  }
});
