import { StyleSheet } from 'react-native';
import { sizes, backgroundColors } from '../../util/constants';
import { inputBordered } from '../../util/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColors.BACK_SIGNIN
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
