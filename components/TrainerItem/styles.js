import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: 'silver',
    flex: 1,
    height: 200,
    margin: 10,
    borderRadius: 7,
    overflow: 'hidden',
    backgroundColor: 'blue',
    position: 'relative'
  },
  image: {
    // borderWidth: 1,
    // borderColor: 'black',
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    zIndex: 120,
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 10
  },
  illustration: {
    flex: 1,
    width: '100%'
  },
  title: {
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});
