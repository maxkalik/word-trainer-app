import { StyleSheet } from 'react-native';
import { sizes } from '../../../util/constants';

const baseSize = sizes.PADDING_LARGE * 2;

export const styles = StyleSheet.create({
  container: {
    height: sizes.HEIGHT_GENERAL + baseSize,
    position: 'absolute',
    borderTopColor: 'transparent',
    padding: baseSize
  }
});
