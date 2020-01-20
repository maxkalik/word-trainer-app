import React from 'react';
import { StyleSheet, View, Text, GestureResponderEvent } from 'react-native';
import { Btn } from './common';

interface MessageProps {
  title: string;
  description: string;
  btnTitle: string;
  btnOnPress: (event: GestureResponderEvent) => void;
}

const Message: React.FC<MessageProps> = ({
  title,
  description,
  btnTitle,
  btnOnPress
}): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    <Btn filled addStyle={styles.btn} onPress={btnOnPress} title={btnTitle} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 200
  },
  title: { fontSize: 24, paddingBottom: 10 },
  description: { fontSize: 18, paddingBottom: 10 },
  btn: { marginTop: 20 }
});

export default Message;
