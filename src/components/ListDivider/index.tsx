import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

type Props = {
  isCentered?: boolean;
};

export function ListDivider({ isCentered }: Props) {
  return <View style={[styles.container, isCentered ? { marginVertical: 16 } : { marginBottom: 30, marginTop: 2 }]} />;
}
