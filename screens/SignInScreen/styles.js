import { StyleSheet } from 'react-native';
import { sizes, backgroundColors } from '../../util/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColors.BACK_SIGNIN,
    flex: 1
  },
  scene: {
    padding: sizes.PADDING_GENERAL + sizes.PADDING_LARGE
  }
});
