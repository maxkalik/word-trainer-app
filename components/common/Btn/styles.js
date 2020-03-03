import { StyleSheet } from 'react-native';
import { colors, sizes, textSizes } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  filled: { backgroundColor: colors.COLOR_BUTTON }
});

const largeBtnStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: sizes.HEIGHT_GENERAL,
    borderRadius: sizes.RADIUS_ELEMENTS
  },
  btnTitle: {
    textAlign: 'center',
    paddingHorizontal: sizes.PADDING_GENERAL * 2,
    fontSize: textSizes.HEADER2
  }
});

const smallBtnStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: sizes.HEIGHT_ELEMENTS,
    borderRadius: sizes.RADIUS_ELEMENTS
  },
  btnTitle: {
    textAlign: 'center',
    paddingHorizontal: sizes.PADDING_GENERAL * 2,
    fontSize: textSizes.HEADER3
  }
});

export { styles, largeBtnStyles, smallBtnStyles };
