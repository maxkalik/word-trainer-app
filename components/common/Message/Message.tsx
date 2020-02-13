import React from 'react';
import { View, Text } from 'react-native';
import Btn from '../Btn/Btn';
import { MessageProps } from './types';
import { styles } from './styles';

const Message: React.FC<MessageProps> = ({ title, description, btnTitle, btnOnPress }): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    <Btn filled addStyle={styles.btn} onPress={btnOnPress} title={btnTitle} />
  </View>
);

export default Message;
