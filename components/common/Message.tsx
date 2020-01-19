import React from 'react';
import { Modal, Text, View, Alert, StyleSheet, Button } from 'react-native';

export interface MessageProps {
  visible: boolean;
  title: string;
}

interface MessageComponentProps {
  messageProps: MessageProps;
  onPress: () => void;
}

const Message: React.FC<MessageComponentProps> = ({
  messageProps: { visible, title },
  onPress
}): JSX.Element => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={visible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
    }}>
    <View style={styles.container}>
      <Text style={styles.messageTxt}>{title}</Text>
      <Button title="Continue" onPress={onPress} />
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
    // borderWidth: 1,
    // borderColor: 'black'
  },
  messageTxt: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20
  }
});

export default Message;
