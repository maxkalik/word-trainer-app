import { StyleSheet } from 'react-native';
import { sizes, textSizes } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    paddingVertical: 20,
    paddingHorizontal: sizes.PADDING_GENERAL
  },
  title: {
    fontSize: textSizes.HEADER1,
    fontWeight: '600'
  }
});
