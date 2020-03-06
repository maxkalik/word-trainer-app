import React from 'react';
import { View, Text, StyleProp, TextStyle } from 'react-native';
import { styles } from './styles';
import { ModeTypes } from '../../../state/ModeState';
import { colors } from '../../../util/constants';

interface ListItemLineItemProps {
  mode: ModeTypes;
  addStyle: StyleProp<TextStyle>;
  children: string;
}

interface ListItemProps {
  mode: ModeTypes;
  name: string;
  value: string | null;
  containerStyle?: StyleProp<TextStyle>;
  nameStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;
}

const ListItemLineItem: React.FC<ListItemLineItemProps> = ({ addStyle, mode, children }): JSX.Element => (
  <Text style={[styles.listItem, addStyle, { color: colors[mode].COLOR_PRIMARY }]}>{children}</Text>
);

const ListItem: React.FC<ListItemProps> = ({
  mode,
  name,
  value,
  containerStyle,
  nameStyle,
  valueStyle
}): JSX.Element => (
  <View style={[styles.container, containerStyle]}>
    <ListItemLineItem mode={mode} addStyle={[styles.name, nameStyle]}>
      {name}
    </ListItemLineItem>
    <ListItemLineItem mode={mode} addStyle={[styles.value, valueStyle]}>
      {value || '-'}
    </ListItemLineItem>
  </View>
);

export default ListItem;
