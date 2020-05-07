import { StyleSheet } from 'react-native';
import { sizes, backgroundColors } from '../../util/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColors.BACK_SIGNIN,
    flex: 1
  },
  scene: {
    paddingHorizontal: sizes.PADDING_GENERAL + sizes.PADDING_LARGE,
    paddingBottom: sizes.PADDING_LARGE
  }
});
