import { StyleSheet } from 'react-native';
import { sizes } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: sizes.HEIGHT_GENERAL,
    backgroundColor: 'white'
  },
  item: {
    // borderColor: 'black',
    // borderWidth: 1
    flex: 1,
    padding: 20,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  backBtn: {
    width: 40,
    alignItems: 'center'
  },
  word: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  },
  translation: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  }
});
