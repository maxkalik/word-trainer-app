import { StyleSheet } from 'react-native';
import { sizes } from '../../constants';

const GENERAL_SIZE = 10;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    borderRadius: sizes.RADIUS_ITEMS,
    backgroundColor: 'blue',
    margin: GENERAL_SIZE,
    padding: GENERAL_SIZE
  },
  illustration: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    paddingHorizontal: GENERAL_SIZE,
    paddingTop: GENERAL_SIZE,
    paddingBottom: sizes.PADDING_GENERAL,
    fontSize: 22,
    color: 'white'
  }
});
