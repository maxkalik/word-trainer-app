import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../util/constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: sizes.HEIGHT_ELEMENTS,
    paddingLeft: sizes.PADDING_GENERAL,
    alignItems: 'center'
  },
  wordItem: {
    flex: 1,
    height: sizes.HEIGHT_ELEMENTS,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  checked: {
    backgroundColor: colors.COLOR_ACTIVE_CHECKED
  }
});
