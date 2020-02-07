import { StyleSheet } from 'react-native';
import { sizes } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: sizes.HEIGHT_GENERAL + 30
  },
  labelStyle: {
    fontSize: 12,
    paddingBottom: 10
  }
});
