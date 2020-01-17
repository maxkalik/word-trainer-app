import React from 'react';
import { Button, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomBarSection } from '../components/common';

interface BottomToolBarProps {
  acceptBtnTitle: string;
  acceptBtnOnPress: () => void;
  cancelBtnTitle: string;
  cancelBtnOnPress: () => void;
}

const BottomToolBar: React.FC<BottomToolBarProps> = ({
  acceptBtnTitle,
  acceptBtnOnPress,
  cancelBtnTitle,
  cancelBtnOnPress
}): JSX.Element => (
  <BottomBarSection>
    <Button title={acceptBtnTitle} onPress={acceptBtnOnPress} />
    <TouchableOpacity
      onPress={cancelBtnOnPress}
      style={styles.bottomToolBarBtn}>
      <Text>{cancelBtnTitle}</Text>
    </TouchableOpacity>
  </BottomBarSection>
);

const styles = StyleSheet.create({
  bottomToolBarBtn: {
    marginTop: 14
  }
});

export default BottomToolBar;
