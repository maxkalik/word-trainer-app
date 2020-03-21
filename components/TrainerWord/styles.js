import { StyleSheet } from 'react-native';
import { sizes, fontSizes, colors } from '../../util/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  word: {
    color: colors.default.COLOR_PRIMARY,
    fontSize: fontSizes.WORD,
    marginBottom: sizes.PADDING_SMALL
  },
  // line: {
  //   height: 4,
  //   backgroundColor: 'black'
  // }
});
