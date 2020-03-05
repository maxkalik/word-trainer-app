import { StyleSheet } from 'react-native';
import { sizes, colors } from '../../../util/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.COLOR_LIGHT_BACKGROUND,
    paddingTop: sizes.PADDING_GENERAL,
    borderTopColor: colors.COLOR_BORDER,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTopWidth: 1
  }
});
