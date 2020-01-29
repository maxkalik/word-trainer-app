import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // justifyContent: 'space-between',
    height: 280,
    padding: 20,
    // borderColor: 'black',
    // borderWidth: 1
  },
  input: {
    height: 50,
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  },
  buttons: {
    justifyContent: 'space-between',
    marginTop: 15
  },
  btnClear: {
    alignSelf: 'center',
    marginTop: 5
  }
});
