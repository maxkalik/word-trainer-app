import { StyleSheet } from 'react-native';
import { sizes, colors } from '../../util/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    position: 'absolute',
    alignSelf: 'center',
    top: sizes.PADDING_LARGE
  },
  textFields: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  buttons: {
    marginTop: sizes.PADDING_LARGE,
    flex: 1,
    alignItems: 'center'
  },
  smallBtns: {
    justifyContent: 'space-between',
    flex: 1
  },
  btnAnonymus: {
    bottom: sizes.HEIGHT_GENERAL + sizes.PADDING_GENERAL,
    borderColor: colors.default.COLOR_ACTIVE,
    borderWidth: sizes.BORDER_GENERAL
  },
  submitBtn: {
    width: '100%'
  }
});
