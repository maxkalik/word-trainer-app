import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white'
  },
  trainerContainer: {
    flex: 1
  },
  header: {
    // borderWidth: 1,
    // borderColor: 'black',
    textAlign: 'center',
    paddingVertical: 40
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 24,
    paddingHorizontal: 10
  },
  list: {
    // borderWidth: 1,
    // borderColor: 'black',
    padding: 10
  },
  trainer: {
    // borderWidth: 1,
    // borderColor: 'silver',
    flex: 1,
    height: 160,
    margin: 10,
    borderRadius: 7,
    overflow: 'hidden'
  },
  image: {
    // borderWidth: 1,
    // borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'silver',
    flex: 1
  },
  title: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    backgroundColor: 'lightgray'
  }
});
