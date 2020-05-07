import { StyleSheet } from 'react-native';
import { sizes, colors } from '../../util/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  isCheckMode: {
    paddingLeft: sizes.PADDING_GENERAL
  },
  word: {
    flex: 1,
    opacity: 1
  },
  translation: {
    flex: 1,
    opacity: 0.7
  },
  checkedTranslation: {
    opacity: 1,
    color: colors.default.COLOR_ACTIVE
  }
});
