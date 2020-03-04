import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { colors } from '../../util/constants';
import { IconProps, iconsType } from './types';

const icons: iconsType = {
  ['close']: (
    <Path d="m14.7 2.7-1.4-1.4-5.3 5.3-5.3-5.3-1.4 1.4 5.3 5.3-5.3 5.3 1.4 1.4 5.3-5.3 5.3 5.3 1.4-1.4-5.3-5.3z" />
  ),
  ['check mark']: <Path d="m6 13.4-4.7-4.7 1.4-1.4 3.3 3.3 7.3-7.3 1.4 1.4z" />,
  default: <Rect width={16} height={16} />
};

const renderIcon = (key: keyof typeof icons): JSX.Element => icons[key];

const Icon16px: React.FC<IconProps> = ({ name, color }): JSX.Element => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill={color || colors.COLOR_PRIMARY}>
    {renderIcon(name)}
  </Svg>
);

export default Icon16px;
