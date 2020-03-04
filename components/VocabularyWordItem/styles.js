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
    flex: 1
  },
  translation: {
    flex: 1,
    color: colors.COLOR_SECONDARY
  },
  checkedTranslation: {
    color: colors.COLOR_PRIMARY
  }
});
