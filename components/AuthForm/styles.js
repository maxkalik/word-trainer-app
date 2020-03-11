import { StyleSheet } from 'react-native';
import { sizes, colors } from '../../util/constants';
import { inputBordered } from '../../util/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  input: { ...inputBordered, marginTop: sizes.PADDING_LARGE },
  buttons: {
    marginTop: sizes.PADDING_LARGE
  },
  btnAnonymus: {
    borderColor: colors.COLOR_ACTIVE,
    borderWidth: 2,
    marginTop: sizes.PADDING_GENERAL
  },
  submitBtn: {
    marginBottom: sizes.PADDING_SMALL
  }
});
