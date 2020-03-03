import { StyleSheet } from 'react-native';
import { sizes, textSizes } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    zIndex: 9999,
    elevation: 10,
    left: 0,
    top: 0
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(197, 214, 231, 0.9)',
    borderRadius: sizes.RADIUS_ELEMENTS,
    margin: 10
  },
  title: {
    fontSize: textSizes.PARAGRAPH,
    textAlign: 'center',
    color: 'black'
  }
});
