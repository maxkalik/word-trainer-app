import { StyleSheet } from 'react-native';
import { sizes } from '../../../util/constants';

export const styles = StyleSheet.create({
  container: {
    height: sizes.HEIGHT_GENERAL,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: sizes.PADDING_GENERAL
  },
  backButton: {
    width: 40,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
