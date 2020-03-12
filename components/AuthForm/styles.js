import { StyleSheet } from 'react-native';
import { sizes, colors } from '../../util/constants';
import { inputBordered } from '../../util/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  textFields: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  input: inputBordered,
  buttons: {
    marginTop: sizes.PADDING_LARGE,
    flex: 1
  },
  smallBtns: {
    justifyContent: 'space-between',
    flex: 1
  },
  btnAnonymus: {
    borderColor: colors.default.COLOR_ACTIVE,
    borderWidth: sizes.BORDER_GENERAL
  },
  submitBtn: {
    marginBottom: sizes.PADDING_SMALL
  }
});
