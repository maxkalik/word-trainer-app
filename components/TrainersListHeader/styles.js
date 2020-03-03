import { StyleSheet } from 'react-native';
import { sizes, textSizes } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    paddingVertical: sizes.PADDING_LARGE,
    paddingHorizontal: sizes.PADDING_GENERAL
  },
  title: {
    fontSize: textSizes.HEADER1,
    fontWeight: '600'
  }
});
