import { StyleSheet } from 'react-native';
import { sizes } from '../../../util/constants';

const baseSize = sizes.PADDING_LARGE * 2;
const basePadding = baseSize - sizes.BORDER_GENERAL - sizes.BORDER_GENERAL - 1;

export const styles = StyleSheet.create({
  container: {
    height: sizes.HEIGHT_GENERAL + baseSize,
    // position: 'absolute',
    borderTopColor: 'transparent',
    backgroundColor: 'transparent',
    padding: basePadding
  }
});
