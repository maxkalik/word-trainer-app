import { StyleSheet } from 'react-native';
import { sizes } from '../../../util/constants';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.PADDING_GENERAL + sizes.PADDING_LARGE,
    position: 'absolute',
    borderTopColor: 'transparent',
    backgroundColor: 'transparent'
  },
  icon: {
    height: 2,
    width: '100%'
  }
});
