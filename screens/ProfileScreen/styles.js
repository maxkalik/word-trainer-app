import { StyleSheet } from 'react-native';
import { sizes, fontSizes } from '../../util/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    marginBottom: sizes.HEIGHT_GENERAL,
    padding: sizes.PADDING_LARGE,
    flex: 1
  },
  listItem: {
    flexDirection: 'row'
  },
  listItemText: {
    fontSize: fontSizes.PARAGRAPH
  },
  listItemName: {
    // flex: 1
    opacity: 0.5
  },
  listItemValue: {
    // flex: 2,
    paddingLeft: sizes.PADDING_SMALL
  }
});
