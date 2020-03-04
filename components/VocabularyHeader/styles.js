import { StyleSheet } from 'react-native';
import { sizes, textSizes, colors } from '../../util/constants';

export const styles = StyleSheet.create({
  input: {
    flex: 1
  },
  editBtn: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingRight: sizes.PADDING_SMALL,
    paddingLeft: sizes.PADDING_LARGE
  },
  editBtnTxt: {
    fontSize: textSizes.PARAGRAPH
  },
  doneBtnTxt: {
    color: colors.COLOR_ACTIVE
  }
});
