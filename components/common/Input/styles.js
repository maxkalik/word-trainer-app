import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  focused: {
    backgroundColor: 'silver',
    borderRadius: 10,
    paddingHorizontal: 10
  },
  inputField: {
    flex: 1,
    fontSize: 18,
    color: 'black'
  }
});

export const clearBtnStyles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    width: 30,
    justifyContent: 'center'
    // borderWidth: 1,
    // borderColor: 'black'
  },
  icon: {
    fontSize: 24
  }
});
