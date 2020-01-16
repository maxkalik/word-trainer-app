import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onPress
}): JSX.Element => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.checkbox}>
      {checked && <View style={styles.mark} />}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    // paddingLeft: 10,
    paddingRight: 16,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: 'black'
  },
  mark: {
    width: 10,
    height: 10,
    backgroundColor: 'black'
  }
});

export default Checkbox;
