import React from 'react';
import { TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import { ButtonProps } from './types';
import { colors } from '../../../util/constants';
import { styles, largeBtnStyles, smallBtnStyles } from './styles';

const Btn: React.FC<ButtonProps> = ({
  loading,
  title,
  size,
  filled,
  onPress,
  addStyle,
  mode
}): JSX.Element => {
  const smallSize = size === 'small';
  const containerStyles = [
    styles.container,
    filled && { backgroundColor: mode && colors[mode].COLOR_BUTTON },
    smallSize ? smallBtnStyles.container : largeBtnStyles.container
  ];
  const titleStyles = [
    filled ? { color: 'white' } : { color: 'royalblue' },
    smallSize ? smallBtnStyles.btnTitle : largeBtnStyles.btnTitle
  ];
  return (
    <TouchableOpacity style={[containerStyles, addStyle]} onPress={onPress}>
      {loading ? <ActivityIndicator size="small" /> : <Text style={titleStyles}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default Btn;
