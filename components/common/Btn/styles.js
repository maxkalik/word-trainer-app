import { StyleSheet } from 'react-native';
import { sizes } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  filled: { backgroundColor: 'black' }
});

const largeBtnStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: sizes.HEIGHT_GENERAL,
    borderRadius: sizes.RADIUS_ELEMENTS
  },
  btnTitle: {
    textAlign: 'center',
    paddingHorizontal: 40,
    fontSize: 24
  }
});

const smallBtnStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 50,
    borderRadius: sizes.RADIUS_ELEMENTS
  },
  btnTitle: {
    textAlign: 'center',
    paddingHorizontal: 30,
    fontSize: 18
  }
});

export { styles, largeBtnStyles, smallBtnStyles };
