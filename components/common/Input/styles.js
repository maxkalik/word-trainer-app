import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  focused: {
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  inputField: {
    flex: 1,
    fontSize: 18,
    color: 'black'
  },
  clearButton: {
    alignSelf: 'stretch',
    alignItems: 'center',
    width: 30,
    justifyContent: 'center'
    // borderWidth: 1,
    // borderColor: 'black'
  },
  clearButtonIcon: {
    fontSize: 20
  }
});
