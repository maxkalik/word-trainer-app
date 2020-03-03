import { StyleSheet } from 'react-native';
import { sizes, textSizes, colors } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    height: sizes.HEIGHT_ELEMENTS,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  focused: {
    backgroundColor: colors.COLOR_BACK_ACTIVE,
    borderRadius: sizes.RADIUS_SMALL_ELEMENTS,
    paddingHorizontal: sizes.PADDING_SMALL,
    // borderWidth: 2
  },
  inputField: {
    flex: 1,
    fontSize: textSizes.PARAGRAPH,
    color: colors.COLOR_PRIMARY
  },
  bordered: {
    borderWidth: 1,
    borderColor: colors.COLOR_BORDER
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
