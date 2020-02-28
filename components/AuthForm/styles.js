import { StyleSheet } from 'react-native';
import { sizes } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: sizes.PADDING_GENERAL
  },
  fields: {
    justifyContent: 'space-between',
    width: '100%',
    height: 120,
    paddingHorizontal: 20
  },
  input: {
    height: 50,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: 'silver'
  },
  buttons: {
    marginTop: 20,
    paddingHorizontal: 20
  },
  submitBtn: {
    marginBottom: 10
  }
});
