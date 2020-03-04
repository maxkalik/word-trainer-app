import { StyleSheet } from 'react-native';
import { colors } from '../../../util/constants';

export const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.COLOR_BORDER
  },
  checked: {
    borderColor: colors.COLOR_ACTIVE,
    backgroundColor: colors.COLOR_ACTIVE
  }
});
