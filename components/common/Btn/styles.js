import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  filled: { backgroundColor: 'black' }
});

const largeBtnStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 70,
    borderRadius: 35
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
    borderRadius: 25
  },
  btnTitle: {
    textAlign: 'center',
    paddingHorizontal: 30,
    fontSize: 18
  }
});

export { styles, largeBtnStyles, smallBtnStyles };
