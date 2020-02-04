import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  isCheckMode: {
    paddingLeft: 15
  },
  word: {
    flex: 1
  },
  translation: {
    flex: 1,
    color: 'gray'
  },
  checkedTranslation: {
    color: 'black'
  }
});
