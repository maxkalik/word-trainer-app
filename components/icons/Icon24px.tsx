import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { IconProps, iconsType } from './types';

const icons: iconsType = {
  ['close']: (
    <Path d="m21.7 3.7-1.4-1.4-8.3 8.3-8.3-8.3-1.4 1.4 8.3 8.3-8.3 8.3 1.4 1.4 8.3-8.3 8.3 8.3 1.4-1.4-8.3-8.3z" />
  ),
  ['dictionary line']: (
    <>
      <Path d="m7 3c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1zm0-2h-3c-1.7 0-3 1.3-3 3v4c0 1.7 1.3 3 3 3h3c1.7 0 3-1.3 3-3v-4c0-1.7-1.3-3-3-3z" />
      <Path d="m22 3h-9c-.6 0-1-.4-1-1 0-.6.4-1 1-1h9c.6 0 1 .4 1 1 0 .6-.4 1-1 1z" />
      <Path d="m22 11h-9c-.6 0-1-.4-1-1 0-.6.4-1 1-1h9c.6 0 1 .4 1 1 0 .6-.4 1-1 1z" />
      <Path d="m22 7h-9c-.6 0-1-.4-1-1 0-.6.4-1 1-1h9c.6 0 1 .4 1 1 0 .6-.4 1-1 1z" />
      <Path d="m22 15h-20c-.6 0-1-.4-1-1 0-.6.4-1 1-1h20c.6 0 1 .4 1 1 0 .6-.4 1-1 1z" />
      <Path d="m22 19h-20c-.6 0-1-.4-1-1 0-.6.4-1 1-1h20c.6 0 1 .4 1 1 0 .6-.4 1-1 1z" />
      <Path d="m22 23h-20c-.6 0-1-.4-1-1 0-.6.4-1 1-1h20c.6 0 1 .4 1 1 0 .6-.4 1-1 1z" />
    </>
  ),
  ['dictionary fill']: (
    <>
      <Path d="m7 11h-3c-1.7 0-3-1.3-3-3v-4c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3v4c0 1.7-1.3 3-3 3z" />
      <Path d="m22 3h-9c-.6 0-1-.4-1-1 0-.6.4-1 1-1h9c.6 0 1 .4 1 1 0 .6-.4 1-1 1z" />
      <Path d="m22 11h-9c-.6 0-1-.4-1-1 0-.6.4-1 1-1h9c.6 0 1 .4 1 1 0 .6-.4 1-1 1z" />
      <Path d="m22 7h-9c-.6 0-1-.4-1-1 0-.6.4-1 1-1h9c.6 0 1 .4 1 1 0 .6-.4 1-1 1z" />
      <Path d="m22 15h-20c-.6 0-1-.4-1-1 0-.6.4-1 1-1h20c.6 0 1 .4 1 1 0 .6-.4 1-1 1z" />
      <Path d="m22 19h-20c-.6 0-1-.4-1-1 0-.6.4-1 1-1h20c.6 0 1 .4 1 1 0 .6-.4 1-1 1z" />
      <Path d="m22 23h-20c-.6 0-1-.4-1-1 0-.6.4-1 1-1h20c.6 0 1 .4 1 1 0 .6-.4 1-1 1z" />
    </>
  ),
  ['trainer line']: (
    <Path d="m21.9 6.2-8.9-4.8c-.6-.3-1.3-.3-1.9 0l-9 4.8c-.6.4-1 1-1 1.8s.4 1.4 1 1.8l2.9 1.5v3.9c0 1.3.7 2.5 1.8 3.1l1.2.7v4c0 .6.4 1 1 1s1-.4 1-1v-2.9l.2.1c.6.3 1.2.5 1.8.5s1.2-.2 1.8-.5l3.4-1.9c1.1-.6 1.8-1.8 1.8-3.1v-3.9l2.9-1.6c.6-.4 1-1 1-1.8s-.4-1.3-1-1.7zm-14.1 10.4c-.5-.3-.8-.8-.8-1.3v-2.8l1 .5v3.7zm9.2-1.3c0 .6-.3 1.1-.8 1.3l-3.4 1.9c-.5.3-1.1.3-1.6 0l-1.2-.7v-3.8l1 .6c.3.2.6.2 1 .2.3 0 .7-.1 1-.2l4-2.2zm-5-2.4-8.9-4.9 8.9-4.9 8.9 4.9z" />
  ),
  ['trainer fill']: (
    <Path d="m21.9 6.2-8.9-4.8c-.6-.3-1.3-.3-1.9 0l-9 4.8c-.6.4-1 1-1 1.8s.4 1.4 1 1.8l2.9 1.5v3.9c0 1.3.7 2.5 1.8 3.1l1.2.7v4c0 .6.4 1 1 1s1-.4 1-1v-2.9l.2.1c.6.3 1.2.5 1.8.5s1.2-.2 1.8-.5l3.4-1.9c1.1-.6 1.8-1.8 1.8-3.1v-3.9l2.9-1.6c.6-.4 1-1 1-1.8s-.4-1.3-1-1.7zm-14.1 10.4c-.5-.3-.8-.8-.8-1.3v-2.8l1 .5v3.7zm9.2-1.3c0 .6-.3 1.1-.8 1.3l-3.4 1.9c-.5.3-1.1.3-1.6 0l-1.2-.7v-3.8l1 .6c.3.2.6.2 1 .2.3 0 .7-.1 1-.2l4-2.2z" />
  ),
  ['plus line']: (
    <>
      <Path d="m15 3c3.3 0 6 2.7 6 6v6c0 3.3-2.7 6-6 6h-6c-3.3 0-6-2.7-6-6v-6c0-3.3 2.7-6 6-6zm0-2h-6c-4.4 0-8 3.6-8 8v6c0 4.4 3.6 8 8 8h6c4.4 0 8-3.6 8-8v-6c0-4.4-3.6-8-8-8z" />
      <Path d="m17 11h-4v-4c0-.6-.4-1-1-1s-1 .4-1 1v4h-4c-.6 0-1 .4-1 1s.4 1 1 1h4v4c0 .6.4 1 1 1s1-.4 1-1v-4h4c.6 0 1-.4 1-1s-.4-1-1-1z" />
    </>
  ),
  ['plus fill']: (
    <Path d="m15 1h-6c-4.4 0-8 3.6-8 8v6c0 4.4 3.6 8 8 8h6c4.4 0 8-3.6 8-8v-6c0-4.4-3.6-8-8-8zm2 12h-4v4c0 .6-.4 1-1 1s-1-.4-1-1v-4h-4c-.6 0-1-.4-1-1s.4-1 1-1h4v-4c0-.6.4-1 1-1s1 .4 1 1v4h4c.6 0 1 .4 1 1s-.4 1-1 1z" />
  ),
  ['profile line']: (
    <Path d="m15.9 13.3c0-.1.1-.2.1-.3v-4-.1l3.5-2c.3-.2.5-.5.5-.9s-.2-.7-.5-.9l-7-4c-.3-.2-.7-.2-1 0l-7 4c-.3.2-.5.5-.5.9s.2.7.5.9l3.5 2v.1 4c0 .1 0 .2.1.3-3.5.8-6.1 4-6.1 7.7v1c0 .6.4 1 1 1s1-.4 1-1v-1c0-3.3 2.7-6 6-6h4c3.3 0 6 2.7 6 6v1c0 .6.4 1 1 1s1-.4 1-1v-1c0-3.7-2.6-6.9-6.1-7.7zm-3.9-10.1 5 2.8-5 2.8-5-2.8zm-2 9.8v-3l1.5.9c.2.1.3.1.5.1s.3 0 .5-.1l1.5-.9v3z" />
  ),
  ['profile fill']: (
    <>
      <Path d="m14 13h-4c-4.4 0-8 3.6-8 8v1c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-1c0-4.4-3.6-8-8-8z" />
      <Path d="m4.5 6.9 3.5 2v2.1c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-2.1l3.5-2c.3-.2.5-.5.5-.9s-.2-.7-.5-.9l-7-4c-.3-.2-.7-.2-1 0l-7 4c-.3.2-.5.5-.5.9s.2.7.5.9z" />
    </>
  ),
  ['arrow left line']: <Path d="m14 22.4-10.4-10.4 10.4-10.4 1.4 1.4-9 9 9 9z" />,
  default: <Rect width={24} height={24} />
};

const renderIcon = (key: keyof typeof icons): JSX.Element => icons[key];

const Icon24px: React.FC<IconProps> = ({ name, color }): JSX.Element => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill={color || 'black'}>
    {renderIcon(name)}
  </Svg>
);

export default Icon24px;
