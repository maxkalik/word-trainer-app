import { StyleSheet } from 'react-native';
import { sizes, fontSizes, colors } from '../../../util/constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 200,
    backgroundColor: 'transparent'
  },
  title: {
    paddingBottom: sizes.PADDING_SMALL,
    textAlign: 'center'
  },
  description: {
    textAlign: 'center',
    fontSize: fontSizes.H3,
    paddingBottom: sizes.PADDING_SMALL,
    color: colors.COLOR_PRIMARY
  },
  btn: { marginTop: sizes.PADDING_LARGE }
});
