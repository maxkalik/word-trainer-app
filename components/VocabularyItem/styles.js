import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // borderBottomColor: 'black',
    // borderBottomWidth: 1,
    height: 50,
    alignItems: 'center'
  },
  wordItem: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  }
});
