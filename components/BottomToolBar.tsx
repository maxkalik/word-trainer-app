import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { BottomBarSection, Btn } from '../components/common';

interface BottomToolBarProps {
  acceptBtnTitle: string;
  acceptBtnOnPress: (event: GestureResponderEvent) => void;
  cancelBtnTitle: string;
  cancelBtnOnPress: (event: GestureResponderEvent) => void;
}

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
