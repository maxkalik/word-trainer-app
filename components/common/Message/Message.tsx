import React from 'react';
import { View, Text } from 'react-native';
import Title from '../Title/Title';
import Btn from '../Btn/Btn';
import { MessageProps } from './types';
import { styles } from './styles';
import { colors } from '../../../util/constants';

const Message: React.FC<MessageProps> = ({ title, description, btnTitle, btnOnPress, mode }): JSX.Element => (
  <View style={styles.container}>
    <Title mode={mode} addStyles={styles.title}>
      {title}
    </Title>
    <Text style={[styles.description, { color: colors[mode].COLOR_PRIMARY }]}>{description}</Text>
    <Btn filled addStyle={styles.btn} onPress={btnOnPress} title={btnTitle} mode={mode} />
  </View>
);

export default Message;
