import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

type Props = {
  text?: string;
};

export function Base({ text }: Props) {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
}
