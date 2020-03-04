import { StyleSheet } from 'react-native';
import { sizes, fontSizes } from '../../util/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  word: {
    color: 'black',
    fontSize: fontSizes.WORD,
    marginBottom: sizes.PADDING_SMALL
  },
  // line: {
  //   height: 4,
  //   backgroundColor: 'black'
  // }
});
