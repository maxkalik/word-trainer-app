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
  mode,
  titleColor
}): JSX.Element => {
  const smallSize = size === 'small';
  const colorMode = mode ? colors[mode] : colors.default;
  const containerStyles = [
    styles.container,
    filled && { backgroundColor: colorMode.COLOR_BUTTON || colors.default.COLOR_BUTTON },
    smallSize ? smallBtnStyles.container : largeBtnStyles.container
  ];
  const titleStyles = [
    filled
      ? { color: titleColor || colorMode.COLOR_BUTTON_TITLE_FILLED }
      : { color: colorMode.COLOR_BUTTON_TITLE },
    smallSize ? smallBtnStyles.btnTitle : largeBtnStyles.btnTitle
  ];
  return (
    <TouchableOpacity style={[containerStyles, addStyle]} onPress={onPress}>
      {loading ? <ActivityIndicator size="small" /> : <Text style={titleStyles}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default Btn;
