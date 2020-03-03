import { StyleSheet } from 'react-native';
import { sizes, textSizes, colors } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 280,
    padding: sizes.PADDING_LARGE
  },
  input: {
    height: sizes.HEIGHT_ELEMENTS,
    fontSize: textSizes.HEADER2,
    color: colors.COLOR_PRIMARY,
    textAlign: 'center'
  },
  buttons: {
    justifyContent: 'space-between',
    marginTop: sizes.PADDING_GENERAL
  },
  btnClear: {
    alignSelf: 'center',
    marginTop: 5
  }
});
