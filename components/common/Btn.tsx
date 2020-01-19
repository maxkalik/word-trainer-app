import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  StyleProp,
  GestureResponderEvent,
  ViewStyle
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  size?: string;
  filled?: boolean;
  loading?: boolean;
  addStyle?: StyleProp<ViewStyle>;
}

const Btn: React.FC<ButtonProps> = ({
  loading,
  title,
  size,
  filled,
  onPress,
  addStyle
}): JSX.Element => {
  const smallSize = size === 'small';
  const containerStyles = [
    styles.container,
    filled && styles.filled,
    smallSize ? smallBtnStyles.container : largeBtnStyles.container
  ];
  const titleStyles = [
    filled ? { color: 'white' } : { color: 'royalblue' },
    smallSize ? smallBtnStyles.btnTitle : largeBtnStyles.btnTitle
  ];
  return (
    <TouchableOpacity style={[containerStyles, addStyle]} onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <Text style={titleStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

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

export default Btn;
