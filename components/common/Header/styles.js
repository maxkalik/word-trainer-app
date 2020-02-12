import { StyleSheet } from 'react-native';
import { sizes, colors } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    height: sizes.HEIGHT_GENERAL,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: sizes.PADDING_GENERAL
  },
  withBottomLine: {
    borderBottomColor: colors.COLOR_THIN_BORDER,
    borderBottomWidth: sizes.BORDER_THIN
  },
  backButton: {
    width: 40,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
