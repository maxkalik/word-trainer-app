import { StyleSheet } from 'react-native';
import { sizes, fontSizes } from '../../util/constants';

export const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    paddingVertical: sizes.PADDING_LARGE,
    paddingHorizontal: sizes.PADDING_GENERAL
  },
  title: {
    fontSize: fontSizes.H1,
    fontWeight: '500'
  }
});
