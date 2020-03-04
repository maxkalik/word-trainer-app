import { StyleSheet } from 'react-native';
import { sizes, fontSizes, colors } from '../../../util/constants';

export const styles = StyleSheet.create({
  container: {
    height: sizes.HEIGHT_ELEMENTS,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  focused: {
    backgroundColor: colors.COLOR_ACTIVE_BACK,
    borderRadius: sizes.RADIUS_SMALL_ELEMENTS,
    paddingHorizontal: sizes.PADDING_SMALL
  },
  inputField: {
    flex: 1,
    fontSize: fontSizes.PARAGRAPH,
    color: colors.COLOR_PRIMARY
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
