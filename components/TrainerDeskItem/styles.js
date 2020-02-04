import { StyleSheet } from 'react-native';

export const deskItemStyle = StyleSheet.create({
  container: {
    padding: 15,
    fontSize: 12,
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'silver'
  },
  correct: { backgroundColor: 'green' },
  hint: { backgroundColor: 'orange' },
  failed: { backgroundColor: 'red' },
  disabled: { backgroundColor: '#d8d8d8' }
});

export const itemTextStyle = StyleSheet.create({
  container: {
    textAlign: 'center',
    color: 'black'
  },
  active: { color: 'white' },
  disabled: { color: 'grey' }
});
