import { StyleSheet } from 'react-native';
import { colors, answerColors, fontSizes, sizes } from '../../util/constants';

const styleOnSelect = (color, shadowColor, shadowOpacity) => {
  return {
    backgroundColor: color,
    shadowColor: shadowColor || color,
    shadowOffset: {
      width: 0
    },
    shadowOpacity: shadowOpacity || 0.5,
    shadowRadius: sizes.RADIUS_ELEMENTS
  };
};

export const deskItemStyle = StyleSheet.create({
  container: {
    padding: sizes.PADDING_GENERAL,
    margin: sizes.PADDING_SMALL,
    borderRadius: sizes.RADIUS_SMALL_ELEMENTS,
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  correct: styleOnSelect(answerColors.COLOR_CORRECT, answerColors.COLOR_CORRECT_SHADOW, 0.5),
  hint: styleOnSelect(answerColors.COLOR_HINT),
  failed: { backgroundColor: answerColors.COLOR_FAILED },
  disabled: { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
});

export const itemTextStyle = StyleSheet.create({
  container: {
    textAlign: 'center',
    color: colors.COLOR_PRIMARY_ON_BG,
    fontSize: fontSizes.PARAGRAPH
  },
  active: { color: colors.COLOR_PRIMARY_ON_BG },
  disabled: { opacity: 0.4 }
});
