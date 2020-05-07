import { StyleSheet } from 'react-native';
import { sizes } from '../../../util/constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderTopColor: 'transparent',
    backgroundColor: 'transparent',
    bottom: sizes.PADDING_GENERAL
  },
  icon: {
    height: 2,
    width: '100%'
  }
});
