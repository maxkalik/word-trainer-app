import { StyleSheet } from 'react-native';
import { sizes, fontSizes, colors } from '../../../util/constants';

export const styles = StyleSheet.create({
  container: {
    height: sizes.HEIGHT_ELEMENTS,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  lined: {
    borderBottomWidth: sizes.BORDER_THIN,
    borderBottomColor: colors.default.COLOR_PRIMARY
  },
  focused: {
    borderRadius: sizes.RADIUS_SMALL_ELEMENTS,
    paddingHorizontal: sizes.PADDING_SMALL,
    borderBottomWidth: 0,
    borderBottomColor: 'transparent'
  },
  inputField: {
    flex: 1,
    fontSize: fontSizes.PARAGRAPH,
    color: colors.default.COLOR_PRIMARY
  }
});

export const clearBtnStyles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30
  }
});
