import { StyleSheet } from 'react-native';
import { sizes, colors, fontSizes } from '../../util/constants';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    borderRadius: sizes.RADIUS_ITEMS,
    margin: sizes.PADDING_SMALL,
    padding: sizes.PADDING_SMALL
  },
  illustration: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    paddingHorizontal: sizes.PADDING_SMALL,
    paddingTop: sizes.PADDING_SMALL,
    paddingBottom: sizes.PADDING_GENERAL,
    fontSize: fontSizes.H2,
    color: colors.COLOR_PRIMARY_ON_BG
  }
});
