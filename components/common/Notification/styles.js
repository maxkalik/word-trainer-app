import { StyleSheet } from 'react-native';
import { sizes, fontSizes, colors, backgroundColors } from '../../../util/constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    zIndex: 9999,
    elevation: 10,
    left: 0,
    top: 0
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: sizes.PADDING_LARGE,
    paddingHorizontal: sizes.PADDING_SMALL,
    backgroundColor: backgroundColors.BACK_NOTIFICATION,
    borderRadius: sizes.RADIUS_SMALL_ELEMENTS,
    margin: sizes.PADDING_GENERAL
  },
  title: {
    fontSize: fontSizes.PARAGRAPH,
    color: colors.default.COLOR_PRIMARY,
    textAlign: 'center'
  }
});
