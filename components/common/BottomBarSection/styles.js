import { StyleSheet } from 'react-native';
import { sizes, colors } from '../../../util/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.COLOR_PRIMARY_BACK,
    paddingTop: sizes.PADDING_GENERAL,
    borderTopColor: colors.COLOR_BORDER,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTopWidth: 1
  }
});
