import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../util/constants';
import { inputBordered } from '../../util/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.COLOR_LIGHT_BACKGROUND
  },
  scene: {
    flex: 1,
    padding: sizes.PADDING_LARGE + sizes.PADDING_SMALL
  },
  input: inputBordered,
  submitBtn: {
    marginTop: sizes.PADDING_LARGE
  }
});
