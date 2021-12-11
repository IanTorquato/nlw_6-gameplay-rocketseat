import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image } from 'react-native';

import { theme } from '@global/styles/theme';

import { styles } from './styles';

type Props = {
  imageUrl: string;
};

export function Avatar({ imageUrl }: Props) {
  const { secondary50, secondary60 } = theme.colors;

  return (
    <LinearGradient style={styles.container} colors={[secondary50, secondary60]}>
      <Image source={{ uri: imageUrl }} style={styles.avatar} />
    </LinearGradient>
  );
}
