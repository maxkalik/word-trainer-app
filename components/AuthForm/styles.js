import { StyleSheet } from 'react-native';
import { sizes } from '../../util/constants';
import { inputBordered } from '../../util/styles';

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
    paddingHorizontal: sizes.PADDING_LARGE
  },
  input: inputBordered,
  buttons: {
    marginTop: sizes.PADDING_LARGE,
    paddingHorizontal: sizes.PADDING_LARGE
  },
  submitBtn: {
    marginBottom: sizes.PADDING_SMALL
  }
});
