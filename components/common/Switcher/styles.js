import { StyleSheet } from 'react-native';
import { fontSizes, colors, sizes } from '../../../util/constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    color: colors.COLOR_PRIMARY,
    fontSize: fontSizes.PARAGRAPH,
    paddingLeft: sizes.PADDING_SMALL
  },
  on: {
    color: colors.COLOR_ACTIVE
  }
});
