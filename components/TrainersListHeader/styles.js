import { StyleSheet } from 'react-native';
import { sizes, textStyle } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    paddingVertical: 20,
    paddingHorizontal: sizes.PADDING_GENERAL
  },
  title: {
    // textAlign: 'center',
    fontSize: textStyle.HEADER1,
    fontWeight: '600'
  }
});
