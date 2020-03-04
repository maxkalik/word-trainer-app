import { StyleSheet } from 'react-native';

export const deskItemStyle = StyleSheet.create({
  container: {
    padding: 15,
    fontSize: 12,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  correct: { backgroundColor: 'green' },
  hint: { backgroundColor: 'orange' },
  failed: { backgroundColor: 'red' },
  disabled: { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
});

export const itemTextStyle = StyleSheet.create({
  container: {
    textAlign: 'center',
    color: 'white'
  },
  active: { color: 'white' },
  disabled: { color: 'grey' }
});
