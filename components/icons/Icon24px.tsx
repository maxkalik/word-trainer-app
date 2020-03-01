import React from 'react';
import Svg, { Rect } from 'react-native-svg';
import { Icon24pxClose } from './icons24px/Icon24pxClose';
import { Icon24pxDictLine, Icon24pxDictFill } from './icons24px/Icon24pxDict';
import { Icon24pxTrainerLine, Icon24pxTrainerFill } from './icons24px/Icon24pxTrainer';
import { Icon24pxPlusLine, Icon24pxPlusFill } from './icons24px/Icon24pxPlus';
import { Icon24pxProfileLine, Icon24pxProfileFill } from './icons24px/Icon24pxProfile';
import { Icon24pxArrowLeftLine } from './icons24px/Icon24pxArrow';
import { IconProps, iconsType } from './types';

const icons: iconsType = {
  ['close']: Icon24pxClose,
  ['dictionary line']: Icon24pxDictLine,
  ['dictionary fill']: Icon24pxDictFill,
  ['trainer line']: Icon24pxTrainerLine,
  ['trainer fill']: Icon24pxTrainerFill,
  ['plus line']: Icon24pxPlusLine,
  ['plus fill']: Icon24pxPlusFill,
  ['profile line']: Icon24pxProfileLine,
  ['profile fill']: Icon24pxProfileFill,
  ['arrow left line']: Icon24pxArrowLeftLine,
  default: <Rect width={24} height={24} />
};

const renderIcon = (key: keyof typeof icons): JSX.Element => icons[key];

const Icon24px: React.FC<IconProps> = ({ name, color }): JSX.Element => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill={color || 'black'}>
    {renderIcon(name)}
  </Svg>
);

export default Icon24px;
