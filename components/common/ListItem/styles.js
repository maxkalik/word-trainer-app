import { StyleSheet } from 'react-native';
import { sizes, fontSizes } from '../../../util/constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  listItem: {
    fontSize: fontSizes.PARAGRAPH
  },
  name: {
    // flex: 1
    opacity: 0.5
  },
  value: {
    // flex: 2,
    paddingLeft: sizes.PADDING_SMALL
  }
});
