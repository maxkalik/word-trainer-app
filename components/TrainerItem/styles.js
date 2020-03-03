import { StyleSheet } from 'react-native';
import { sizes } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    borderRadius: sizes.RADIUS_ITEMS,
    backgroundColor: 'blue',
    margin: 10,
    padding: 10
  },
  illustration: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: sizes.PADDING_GENERAL,
    fontSize: 22,
    color: 'white'
  }
});
