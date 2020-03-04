import { StyleSheet } from 'react-native';
import { sizes, fontSizes, colors } from '../../util/constants';

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
    fontSize: fontSizes.PARAGRAPH
  },
  doneBtnTxt: {
    color: colors.COLOR_ACTIVE
  }
});
