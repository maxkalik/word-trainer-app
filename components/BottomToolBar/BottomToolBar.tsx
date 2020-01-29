import React from 'react';
import { BottomBarSection, Btn } from '../common';
import { BottomToolBarProps } from './types';

const BottomToolBar: React.FC<BottomToolBarProps> = ({
  acceptBtnTitle,
  acceptBtnOnPress,
  cancelBtnTitle,
  cancelBtnOnPress
}): JSX.Element => (
  <BottomBarSection>
    <Btn filled title={acceptBtnTitle} onPress={acceptBtnOnPress} />
    <Btn size="small" title={cancelBtnTitle} onPress={cancelBtnOnPress} />
  </BottomBarSection>
);

export default BottomToolBar;