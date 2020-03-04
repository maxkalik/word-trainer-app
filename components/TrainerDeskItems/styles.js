import { StyleSheet } from 'react-native';
import { sizes } from '../../util/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: sizes.PADDING_GENERAL
  }
});
