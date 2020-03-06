import { StyleSheet } from 'react-native';
import { sizes, fontSizes, colors } from '../../util/constants';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingRight: sizes.PADDING_SMALL,
    paddingLeft: sizes.PADDING_LARGE
  },
  editText: {
    fontSize: fontSizes.PARAGRAPH
  },
  doneText: {
    color: colors.COLOR_ACTIVE
  }
});
