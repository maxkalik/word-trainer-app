import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../../util/constants';

export const styles = StyleSheet.create({
  container: {
    borderRadius: sizes.RADIUS_ELEMENTS,
    borderWidth: sizes.BORDER_THIN,
    borderColor: colors.COLOR_BORDER,
    padding: sizes.PADDING_LARGE,
    alignSelf: 'stretch',
    marginBottom: sizes.PADDING_GENERAL
  },
  title: {
    paddingBottom: sizes.PADDING_GENERAL
  }
});
