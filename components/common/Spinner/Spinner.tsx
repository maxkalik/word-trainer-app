import React from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';
import { useModeValue } from '../../../state';
import { styles } from './styles';
import { colors } from '../../../util/constants';

const Spinner: React.FC = (): JSX.Element => {
  const [mode] = useModeValue();
  return (
    <View style={[styles.container, { backgroundColor: colors[mode].COLOR_BACKGROUND }]}>
      <StatusBar hidden />
      <ActivityIndicator size="large" color={colors[mode].COLOR_PRIMARY} />
    </View>
  );
};

export default Spinner;
