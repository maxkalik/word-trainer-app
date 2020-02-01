import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IcnProps, iconsType } from './types';

const icons: iconsType = {
  ['close']: (
    <Path d="m21.7 3.7-1.4-1.4-8.3 8.3-8.3-8.3-1.4 1.4 8.3 8.3-8.3 8.3 1.4 1.4 8.3-8.3 8.3 8.3 1.4-1.4-8.3-8.3z" />
  )
};

const renderIcon = (key: keyof typeof icons): JSX.Element =>
  icons[key || 'default'];

const Icn24px: React.FC<IcnProps> = ({ name }): JSX.Element => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="black">
    {renderIcon(name)}
  </Svg>
);

export default Icn24px;
