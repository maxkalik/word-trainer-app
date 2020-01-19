import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Text
} from 'react-native';

interface BtnProps {
  loading: boolean;
  title: string;
  onPress: () => void;
}

const Btn: React.FC<BtnProps> = ({ loading, title, onPress }): JSX.Element => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    {loading ? (
      <ActivityIndicator size="small" />
    ) : (
      <Text style={styles.btnTitle}>{title}</Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    marginVertical: 20,
    width: '100%',
    backgroundColor: 'black',
    alignSelf: 'flex-end'
  },
  btnTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    paddingBottom: 2
  }
});

export default Btn;
