import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 320,
    padding: 20
  },
  input: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center'
  },
  buttons: {
    height: 120,
    justifyContent: 'space-between'
  },
  btnClear: {
    alignSelf: 'center',
    marginTop: 20
  }
});
