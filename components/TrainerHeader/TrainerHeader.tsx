import React from 'react';
import { TouchableOpacity, GestureResponderEvent } from 'react-native';
import { Header } from '../../components/common';
import { Icon24px } from '../../components/icons';
import { styles } from './styles';

const TrainerHeader: React.FC<{
  onPress: (event: GestureResponderEvent) => void;
}> = ({ onPress }): JSX.Element => (
  <Header>
    <TouchableOpacity onPress={onPress} style={styles.btnBack}>
      <Icon24px name="arrow left line" />
    </TouchableOpacity>
  </Header>
);

export default TrainerHeader;
