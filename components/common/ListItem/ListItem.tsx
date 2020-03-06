import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { ListItemLineItemProps, ListItemProps } from './types';
import { colors } from '../../../util/constants';

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
